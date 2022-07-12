const router = require("express").Router();

router.all("/", (req, res) => {
    return res.status(418).json({
        code: 418,
        message: "I'm a teapot"
    })
});

module.exports = router;
module.exports.aliases = ["/t"];