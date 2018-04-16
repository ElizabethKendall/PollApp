const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    question: {type: String},
    option01_opt: {type: String},
    option02_opt: {type: String},
    option03_opt: {type: String},
    option04_opt: {type: String},
    option01_voters: [{type: Schema.Types.ObjectId, ref: 'User'}],
    option02_voters: [{type: Schema.Types.ObjectId, ref: 'User'}],
    option03_voters: [{type: Schema.Types.ObjectId, ref: 'User'}],
    option04_voters: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {timestamps: true});
mongoose.model("Poll", PollSchema);