const { Router } = require("express");
const {
  createFact,
  getUserFacts,
  getFacts,
  deleteFact,
  editPost,
  addLikeToFact,
  addDislikeToFact
} = require("../controller/factController");
const factRoute = Router();

factRoute.post("/facts", createFact);
factRoute.get("/facts", getFacts);
factRoute.get("/facts/:userId", getUserFacts);
factRoute.delete("/facts/:factId", deleteFact);
factRoute.put("/facts/:factId", editPost);
factRoute.post('/facts/like/:factId/:userId', addLikeToFact)
factRoute.post('/facts/dislike/:factId/:userId', addDislikeToFact)

module.exports = factRoute;
