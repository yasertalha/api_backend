module.exports = (sequelize_instance, Sequelize) => {
  const Users = sequelize_instance.define("Users", {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
  });
  return Users;
};
