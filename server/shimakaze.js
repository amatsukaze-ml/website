const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const Logger = require("./utils/Logger");

class Shimakaze {
    /**
     * @type {import("express").Express}
     */
    static app;
    static routersDirectory;

    constructor() {
        Shimakaze.#ensureLogsDirectoryExists();
        Logger.WriteFileInstance(Logger.GetCurrentFileName());

        Shimakaze.routersDirectory = path.join(__dirname, "routers");

        Shimakaze.app = express();
        Shimakaze.#setup(Shimakaze.app);
    }

    Start(port) {
        Shimakaze.app.listen(port, () => {
            Logger.Info(`Listening on port ${port}`);
        })
    }

    /**
     * @param {import("express").Express} app 
     */
    static #setup(app) {
        Logger.Log("Setting up server.");

        Logger.Debug("Setting up middlewares.");
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morgan('tiny'));
        app.use(cors());
        app.use(multer().any());
        app.use("*", require("./middlewares/UtilitiesMiddleware"));

        Logger.Debug("Setting up routes.");
        Shimakaze.#setupRoutes();

        app.set("json-spaces", 4);

        Logger.Log("Setup complete.");
    }

    static #setupRoutes() {
        let routers = Shimakaze.#recursiveFetch(Shimakaze.routersDirectory, ".js");

        routers.forEach(router => {
            let routerModule = require(router);
            let path = router.replace(Shimakaze.routersDirectory, "").slice(0, -3);
            
            let routerAliases = routerModule.aliases || [];
            let aliases = [path, ...routerAliases];

            aliases.forEach(alias => {
                this.app.use(alias, routerModule);
            });

            Logger.Debug(`Registered router: ${path} ${aliases.length > 0 ? `With ${aliases.length - 1} aliases (${aliases.slice(1, aliases.length).join(", ")})` : ""}`);
        });
    }

    static #recursiveFetch(path, extension) {
        let files = fs.readdirSync(path);
        let result = [];

        files.forEach(file => {
            let filePath = path + "/" + file;

            if (fs.statSync(filePath).isDirectory())
                result = result.concat(Shimakaze.#recursiveFetch(filePath, extension));
            else if (file.endsWith(extension))
                result.push(filePath);
        });

        return result;
    }

    static #ensureLogsDirectoryExists() {
        let logs = Logger.GetLogsDirectory();

        if (!fs.existsSync(logs))
            fs.mkdirSync(logs);
    }
}

module.exports = Shimakaze;