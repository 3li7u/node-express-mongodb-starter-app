const mongoose = require("mongoose");
const { DB_URI } = require("../conf");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DB_URI)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error("Failed to connect to the database", err));
};
