const mongoose = require("mongoose");
const {
  MONGO_DATABASE,
  MONGO_CLUSTER,
  MONGO_USER,
  MONGO_PASSWORD,
} = process.env;
const connection = mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

connection
  .then(() => {
    console.log(`mongodb connected successfully!`);
  })
  .catch((err) => {
    console.error("err in mongodb connection", err);
  });
