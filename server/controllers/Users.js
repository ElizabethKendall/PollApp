const mongoose = require("mongoose");
var User = mongoose.model("User");
var Poll = mongoose.model("Poll");
module.exports = {
    "root":function(req, res){
        res.render("index.html");
    },
    "login":function(req,res) {
    User.findOne ({ name: req.body.name }, function (err, user) {
        if(user==null){
            User.create(req.body, function (err, user) {
                if(!err){
                    req.session.user = user;
                    res.json({message: "Success"});    
                }
                else{
                    res.json({message: "Error", errors: err});    
                }
            });
        }
        else {
            req.session.user = user;
            res.json({message: "Success"});
        }
    });},
    "checkSession":function(req, res) {
        if(req.session.user){
             res.json({message: "Success", user: req.session.user});
        }
        else{
             res.json({message: "Error", errors: "Cannot find req.session.user"});
        }
     },
    "logout":function(req, res){
        req.session.destroy();
        res.redirect('/');
    },

}
