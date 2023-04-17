const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
      timestamp: false,
    },
    logging: false,
    timezone: "+03:30",
  }
);
const db = {}
sequelize
  .authenticate()
  .then(() => {
    console.log("sequelize connected successfully.");
  })
  .catch((err) => {
    console.error("sequelize connected has error:.", err);
  })


db.User = require('../model/seqeulize/user')(sequelize,Sequelize.DataTypes);
sequelize.sync()

module.exports = db
