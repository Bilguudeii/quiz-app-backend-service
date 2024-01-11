const mongoose = require("mongoose");

const url =
  "mongodb+srv://npx:060818@cluster0.bnme7qc.mongodb.net/?retryWrites=true&w=majority";

  // first declare try and catch
  // connect to mongoose
  //console.log hii
  const connect = async () => {
    try {
      await mongoose.connect(url);
      console.log("Database succesfully connected")
    } catch (err) {
      console.log(err);
    }
  };

module.exports = connect;
