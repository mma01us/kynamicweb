// routes.js

const bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
    app.get("", function(req, res){ // Any page requested
        res.redirect("/"); // Force all to redirect to index page
    });
    app.get("/", function(req, res){
        res.render("../src/views/index.ejs");
    });
};