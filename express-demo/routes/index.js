module.exports = (app) => {
    app.use(require("../controllers/demoMiddleware"));

    app.get("/", (req, res, next) => {
        // res.json({
        //     name: "ali",
        //     family: "kalan"
        // });
    });
};