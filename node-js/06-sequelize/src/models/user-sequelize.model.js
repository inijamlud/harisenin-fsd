const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("Seq_User", {
  name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
