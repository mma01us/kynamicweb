// routes.js

const bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("../src/views/index.ejs");
    });
};