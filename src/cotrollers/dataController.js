const db = require("../Models/index");
const commonControllers = require("./commonControllers");

//tables
const Users = db.Users;

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

module.exports = { updateToken };
