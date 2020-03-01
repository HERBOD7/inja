module.exports = (req, res, next) => {
    console.log("BEFORE");
    next();
    console.log("AFTER");
}