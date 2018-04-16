var express = require("express");
var path = require("path");
var bp = require("body-parser");
var session = require("express-session");
var app = express();
const port = 8000;
app.use(bp.urlencoded({ extended:true }));
app.use(bp.json());
app.use(session({ saveUninitialized:true,secret:"foobar",resave:false }));
const STATIC_DIR = "/client/dist";
app.use(express.static(path.join(__dirname, STATIC_DIR)));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
app.listen(port, function() {
    console.log("listening on port " + port);
});
