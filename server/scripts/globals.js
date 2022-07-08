const fs = require("fs");
const toml = require("toml");
const { PrismaClient } = require("@prisma/client");
const Logger = require("../utils/Logger");

const prisma = new PrismaClient({
    log: [
        { emit: "event", level: "query" },
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
        { emit: "event", level: "error" },
    ]
});

module.exports = () => {
    global.glob = {};
    global.Package = require("../../package.json");
    global.Config = toml.parse(fs.readFileSync("./config.toml", "utf-8"));

    global.Prisma = prisma;

    setupLogger();

    process.on("exit", cleanup.bind(null, { cleanup: true }));
}

function cleanup() {
    prisma.$disconnect();
}

function setupLogger() {
    let isDebug = Config["log_level"].indexOf("debug") !== 1;

    if (isDebug) {
        prisma.$on("query", (e) => { Logger.Debug(e.query, "PRISMA") });
        prisma.$on("info", (e) => { Logger.Info(e.message, "PRISMA") });
    }

    prisma.$on("warn", (e) => { Logger.Warn(e.message, "PRISMA") });
    prisma.$on("error", (e) => { Logger.Error(e.message, "PRISMA") });
}