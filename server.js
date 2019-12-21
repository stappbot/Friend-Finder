var express = require("express");
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");
​var bodyParser = require("body-parser");
var app = express();
​
var PORT = process.env.PORT || 8080;

//JSON parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({type: "application/*+json"}))
app.use(bodyParser.raw({type:"application/vdn.custom-type"}))
app.use(bodyParser.text({type:"text/html"}))

require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);
​
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// ​
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});