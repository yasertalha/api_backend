const Sequelize = require("sequelize");
const dbconfig = require("../config/dbconfig.json");

//CREATE INSTANCE
const sequelize_instance = new Sequelize(
  dbconfig.DB,
  dbconfig.USER,
  dbconfig.PASSWORD,
  {
    host: dbconfig.HOST,
    dialect: dbconfig.DIALECT,
  }
);

//CONNECT TO DB
sequelize_instance
  .authenticate()
  .then((e) => console.log(e))
  .catch((err) => console.warn(err));

const db = {};

//create table models
db.Users = require("./Users")(sequelize_instance, Sequelize);

//sync
sequelize_instance.sync({ force: false }); // if {force:true} , all tables will be dropped and recreacted

module.exports = db;
