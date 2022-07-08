require("./scripts/globals")();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const app = express();

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

const port = Config.port || 4545;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})