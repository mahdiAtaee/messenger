const Sequelize = require("sequelize");
module.exports = (sequelize, DataType) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hash: {
        type: Sequelize.STRING(64),
      },
      full_name: {
        type: Sequelize.STRING(128),
      },
      email: {
        type: Sequelize.STRING(128),
      },
      password: {
        type: Sequelize.STRING(128),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "users",
    }
  );
};
