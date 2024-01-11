const factModel = require("../database/schema/factSchema");

const createFact = async (req, res) => {
  const body = req.body;
  try {
    const fact = await factModel.create(body);
    res.status(200).send(fact);
  } catch (err) {
    console.log(e);
  }
};
const getFacts = async (req, res) => {
  try {
    const fact = await factModel.find({});
    res.status(200).send(fact);
  } catch {
    console.log(error);
  }
};
const getUserFacts = async (req, res) => {
  const userId = req.params.userId;
  const facts = await factModel.find({ userId: userId });
  console.log(facts)
  res.status(200).send(facts);
};

const deleteFact = async (req, res) => {
  const factId = req.params.factId;
  try {
    const result = await factModel.findByIdAndDelete(factId);
    console.log(result);
    res.status(200).send(`${result._id} Амжилттай устлаа`);
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const factId = req.params.factId;
  const updates = req.body;

  try {
    const updatedFact = await factModel.findByIdAndUpdate(factId, updates, {
      new: true,
    });

    if (!updatedFact) {
      return res.status(404).send("Fact not found");
    }

    res.status(200).send(updatedFact);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const addLikeToFact = async (req, res) => {
  const factId = req.params.factId;
  const userId = req.params.userId;

  try {
    const fact = await factModel.findById(factId);

    if (!fact) {
      return res.status(404).json({ error: "Fact not found" });
    }

    const isUserLiked = fact.likes.includes(userId);
    const updatedDislike = fact.dislikes.filter((id) => id !== userId);
    const updatedLike = isUserLiked ? fact.likes : [...fact.likes, userId];

    const result = await factModel.findByIdAndUpdate(
      factId,
      {
        likes: updatedLike,
        dislikes: updatedDislike,
      },
      { new: true }
    );

    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addDislikeToFact =  async (req, res) => {
  const factId = req.params.factId;
  const userId = req.params.userId;

  try {
    const fact = await factModel.findById(factId);

    if (!fact) {
      return res.status(404).json({ error: "Fact not found" });
    }

    const isUserDisliked = fact.dislikes.includes(userId);
    const updatedLike = fact.likes.filter((id) => id !== userId);
    const updatedDislike = isUserDisliked ? fact.dislikes : [...fact.dislikes, userId];

    const result = await factModel.findByIdAndUpdate(
      factId,
      {
        likes: updatedLike,
        dislikes: updatedDislike,
      },
      { new: true }
    );

    res.status(200).send(result); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFact,
  getFacts,
  getUserFacts,
  deleteFact,
  editPost,
  addLikeToFact,
  addDislikeToFact,
};
