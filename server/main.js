// TODO: move this into a class because i'm lazy.

const fs = require("fs");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const toml = require("toml"); // TODO: Move this into globals.

const app = express();
const config = toml.parse(fs.readFileSync("./config.toml"));

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(multer().any());

app.get('/', (req, res) => {
    res.status(200).json({
        code: 200,
        message: "Yawn"
    });
});

const port = config.port || 4545;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})