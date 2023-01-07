const db = require("../Models/index");
const commonControllers = require("./commonControllers");

//tables
const Users = db.Users;

//get all users
const allUsers = async (req, res) => {
  await Users.findAll() // select * from Users
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => res.status(500).send(err));
};

//get user - Login
const getUser = async (req, res) => {
  const email = req.params.id;
  const isFieldsValid = commonControllers.isFieldsValid(email);
  if (!isFieldsValid) {
    return res.status(400).send(`mandatory fields are missing`);
  }

  await Users.findAll({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user.length) return res.status(400).send("Invalid user");
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

//set new user - sign-up
const setUser = async (req, res) => {
  const { name, email, token } = req.body;
  const isFieldsValid = commonControllers.isFieldsValid(name, email);
  console.log("isFieldsValid " + isFieldsValid);
  if (!isFieldsValid) {
    return res.status(400).send(`mandatory fields missing`);
  }
  const existingUser = await isExistingUser(email);
  if (existingUser) {
    return res.status(400).send("Email Already registered");
  }
  const details = {
    name,
    email,
    token,
  };
  await Users.create(details)
    .then((userDetails) => {
      res.status(200).send(userDetails);
    })
    .catch((err) => res.status(500).send(err));
};

const isExistingUser = async (email) => {
  const users = await Users.findAll({
    where: {
      email,
    },
  });

  console.log(users);
  if (!users.length) return false;
  else return true;
};

//set new Token
const updateToken = async (req, res) => {
  const { email, token } = req.body;
  const isFieldsValid = commonControllers.isFieldsValid(email, token);
  console.log("isFieldsValid " + isFieldsValid);
  if (!isFieldsValid) {
    return res.status(400).send(`mandatory fields missing`);
  }

  await Users.update(
    { token }, // attribute
    { where: { email } } // condition
  )
    .then((userDetails) => {
      res.status(200).send(userDetails);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = { allUsers, setUser, getUser, updateToken };
