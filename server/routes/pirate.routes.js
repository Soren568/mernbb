const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get("/api/pirates/", PirateController.findAllPirates);
    app.get("/api/pirates/:id", PirateController.findOnePirate);
    app.put("/api/pirates/:id", PirateController.updatePirate);
    app.post("/api/pirates/", PirateController.createPirate);
    app.delete("/api/pirates/:id", PirateController.deletePirate);
};