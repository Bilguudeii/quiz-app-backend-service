const UserModel = require("../database/schema/useSchema");
const fs = require("fs");
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
  const body = req.body;
  const password = body.password
  const hashPassword = bcrypt.hashSync(password, 15);
  const data = { ...body , password : hashPassword}
  try {
    await UserModel.create(data);
    res.status(200).send("Account has been created");
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const { id } = req.body;

    if (body.id) {
      const user = await UserModel.findById(id);
      return user
        ? res.status(200).json(user)
        : res.status(404).send("Not Found");
    }

    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error in getUsers:", err);
    res.status(500).send("Internal error");
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password
  try {
    const user = await UserModel.findOne({ email: email })
    const hashedPassword = user.password
    const isUser = bcrypt.compareSync(password , hashedPassword)
    if (isUser) {
      res.status(200).send(user)
    } else {
      res.status(404).send({message:"Invalid credentials"})
    }
  } catch (error) {
    res.status(500).send(error)
  }
};




module.exports = { createUser, loginUser, getUsers };
