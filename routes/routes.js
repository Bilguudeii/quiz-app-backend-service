const { Router } = require("express");
const {
  loginUser,
  createUser,
  getUsers,
} = require("../controller/userController");
const router = Router();
const UserModel = require("../database/schema/useSchema");

const validateEmailAddress = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });
  if (user) {
    res.status(404).send("E-mail already used.");
  } else {
    next();
  }
};

router.post("/signup", validateEmailAddress, createUser);
router.post("/login", loginUser);
router.post("/users", getUsers);


module.exports = router;
