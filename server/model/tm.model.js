const mongoose = require('mongoose')


const TeamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name for this player is required!"],
        minlength: [3, "Name is too short!"]
    },
    position:{
        type: String
    }
}, {timestamps: true })

const Team = mongoose.model("Team",TeamSchema);

module.exports = Team;