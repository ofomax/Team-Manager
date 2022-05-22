const Team = require('../model/tm.model')

// ________________________________________ CREATE PLAYER
module.exports.createPlayer = (req, res) =>{
    const { name, position } = req.body;
    Team.create(req.body)
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ ALL PLAYERS
module.exports.allPlayers = (req, res) =>{
    Team.find({})
        .then(results => res.json(results))
        .catch(err => res.json({error:err}))
}


// ________________________________________ GET ONE PLAYER
module.exports.onePlayer = (req, res) =>{
    Team.findOne({_id:req.params.id})
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ UPDATE PLAYER
module.exports.updatePlayer = (req, res) =>{
    Team.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updateTeam => res.json(updateTeam))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ DELETE PLAYER
module.exports.deletePlayer = (req, res) =>{
    Team.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.status(400).json(err))
}


