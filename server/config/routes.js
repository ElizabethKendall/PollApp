const mongoose = require("mongoose");
const path = require('path');
const Polls = require("../controllers/Polls.js");
const Users = require("../controllers/Users.js");

module.exports = function (app) {
    // will show the angular index page
    app.get("/", Users.root);

    app.post('/login', function(req,res) {
        Users.login(req,res);
    });

    app.get('/checkSession', function (req, res) {
        Users.checkSession(req, res);
    });

    app.get('/logout', function (req, res) {
        Users.logout(req, res);
    });

    app.post('/createPoll', function (req, res) {
        Polls.createPoll(req, res);
    });

    app.get('/getAllPolls', function (req, res) {
        Polls.getAllPolls(req, res);
    });
    
    app.delete('/deletePoll/:id', function (req, res){
        Polls.deletePoll(req, res);
    });

    app.get('/getOnePoll/:id', function (req, res){
        Polls.getOnePoll(req, res);
    });

    app.post('/voteForOption', function (req, res){
        Polls.voteForOption(req, res);
    });

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}
