const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    pollsAuthored: [{type: Schema.Types.ObjectId, ref: 'Poll'}],
    pollsVotedIn: [{type: Schema.Types.ObjectId, ref: 'Poll'}]
}, {timestamps: true});
mongoose.model("User", UserSchema);