const mongoose = require("mongoose");
var Poll = mongoose.model("Poll");
var User = mongoose.model("User");
module.exports = {
    "voteForOption":function(req, res){
        const pollId = req.body['pollId'];
        const optNum = req.body['optNum'];
        const userId = req.session['user']['_id'];
        Poll.findById({_id:pollId}, function (err, poll){
            if(!err){
                if(poll.option01_voters.indexOf(userId)===-1 &&
                poll.option02_voters.indexOf(userId)===-1 &&
                poll.option03_voters.indexOf(userId)===-1 &&
                poll.option04_voters.indexOf(userId)===-1)
                {                    
                    User.findById({_id:req.session['user']['_id']}, function (err, user){
                        if(!err){
                            if(optNum == 1){
                                poll.option01_voters.push(user);
                                user.pollsVotedIn.push(poll);
                                poll.save(function (err, poll){
                                    if(!err){
                                        user.save(function(err, user){
                                            if(!err){
                                                res.json({message: "Success", data: poll});
                                            }
                                            else{
                                                res.json({message: "Error 5", errors: err});
                                            }
                                        });
                                    }
                                    else{
                                        res.json({message: "Error 4", errors: err});            
                                    }
                                });
                            }
                            else if(optNum == 2){
                                poll.option02_voters.push(user);
                                user.pollsVotedIn.push(poll);
                                poll.save(function (err, poll){
                                    if(!err){
                                        user.save(function(err, user){
                                            if(!err){
                                                res.json({message: "Success", data: poll});
                                            }
                                            else{
                                                res.json({message: "Error 5", errors: err});
                                            }
                                        });
                                    }
                                    else{
                                        res.json({message: "Error 4", errors: err});            
                                    }
                                });
                            }
                            else if(optNum == 3){
                                poll.option03_voters.push(user);
                                user.pollsVotedIn.push(poll);
                                poll.save(function (err, poll){
                                    if(!err){
                                        user.save(function(err, user){
                                            if(!err){
                                                res.json({message: "Success", data: poll});
                                            }
                                            else{
                                                res.json({message: "Error 5", errors: err});
                                            }
                                        });
                                    }
                                    else{
                                        res.json({message: "Error 4", errors: err});            
                                    }
                                });
                            }
                            else if(optNum == 4){
                                poll.option04_voters.push(user);
                                user.pollsVotedIn.push(poll);
                                poll.save(function (err, poll){
                                    if(!err){
                                        user.save(function(err, user){
                                            if(!err){
                                                res.json({message: "Success", data: poll});
                                            }
                                            else{
                                                res.json({message: "Error 5", errors: err});
                                            }
                                        });
                                    }
                                    else{
                                        res.json({message: "Error 4", errors: err});            
                                    }
                                });
                            }
                            else{
                                res.json({message: "Error 3", errors: err});
                            }
                        }
                        else{
                            res.json({message: "Error 2", errors: err});
                        }
                    });
                }
            }
            else{
                res.json({message: "Error 1", errors: err});
            }
        });
    },
    "getOnePoll": function(req, res){
        Poll.findById({_id:req.params.id}).populate('author').exec(function (err, poll){
            if(!err){
                res.json({message: "Success", data: poll});
            }
            else{
                res.json({message: "Error 1", errors: err});
            }
        });
    },
    "deletePoll": function(req, res){
        Poll.deleteOne({_id:req.params.id}, function(err){
            if(!err){
                Poll.find({})
                .populate('author')
                .exec(function (err, polls){
                    if(!err){
                        res.json({message: "Success", data: polls});
                    }
                    else{
                        res.json({message: "Error 2", errors: err});
                    }});
            }
            else {
                res.json({message: "Error 1", errors: err});
            }
        });
        
    },
    "getAllPolls": function(req, res) {
        Poll.find({})
        .populate('author')
        .exec(function (err, polls){
            if(!err){
                res.json({message: "Success", data: polls});
            }
            else{                
                res.json({message: "Error 4", errors: err});
            }});
    },
    "createPoll":function (req, res) {
        Poll.create(req.body, function (err, poll) {
            if(!err){      
                User.findById({_id: poll.author}, function(err, user){
                    if(!err){
                        user.pollsAuthored.push(poll);
                        user.save(function (err, user){
                            if(!err){
                                Poll.find({})
                                .populate('author')
                                .exec(function (err, polls){
                                    if(!err){
                                        res.json({message: "Success", data: polls});
                                    }
                                    else{
                                        
                                        res.json({message: "Error 4", errors: err});
                                    }});
                            }
                            else {
                                res.json({message: "Error 3", errors: err});  
                            }
                        });
                    } else {
                        res.json({message: "Error 2", errors: err});
                    }
                });                   
            }
            else{
                res.json({message: "Error 1", errors: err});    
            }});
    }

}