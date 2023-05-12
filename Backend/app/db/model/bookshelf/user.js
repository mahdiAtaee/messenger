const bookshelf = require("../../connection/bookshelf");
const User = bookshelf.model("User", {
  tableName: "users",
  hidden: ["password"],
});

module.exports = User;
