const TeamController = require('../controller/tm.controller');


module.exports = (app) =>{
    app.post("/api/create", TeamController.createPlayer);
    app.get("/api/all", TeamController.allPlayers);
    app.get("/api/player/:id", TeamController.onePlayer);
    app.put("/api/update/:id", TeamController.updatePlayer);
    app.delete("/api/delete/:id", TeamController.deletePlayer);
}