module.exports = (req, res, next) => {
    res.code = (code, data) => {
        return res.status(code).json({ code, data });
    };

    res.message = (code, message) => {
        return res.status(code).json({ code, message });
    }

    next();
}