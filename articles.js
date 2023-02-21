const ARTICLES = require("./mock-articles")

module.exports = function (app) {
    app.get("/articles", function (request, response) {
        response.send(ARTICLES);
    });

    app.get("/article/:key", function (request, response) {
        response.send(ARTICLES.filter(x => x.key === request.params.key)[0]);
    });
};

