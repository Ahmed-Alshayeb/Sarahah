const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ahmdalshayb77:Z3gTEUb9MlSWpufD@e-commerce.gh6zjub.mongodb.net/sharahah?retryWrites=true&w=majority&appName=Sarahah"
    )
    .then(() => {
      console.log(`DB connected successfully ┳━╮`);
    })
    .catch((err) => {
      console.log(`DB connection fail`, err);
    });
};
