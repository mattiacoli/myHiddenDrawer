const notFound = (req, res, next) => {
    res.status(404).json({
        error: "Not Found",
        message: 'Not Found'
    });
}

module.exports = notFound