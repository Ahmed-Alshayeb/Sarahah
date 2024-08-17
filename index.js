const express = require("express");
const path = require("path");
const { connectDB } = require("./DB/connectionDB");
const userRouter = require("./src/modules/user/user.routes");
const app = express();
const port = 3000;
var session = require("express-session");
const messageRouter = require("./src/modules/message/message.routes");
var MongoDBStore = require("connect-mongodb-session")(session);

var store = new MongoDBStore({
  uri: "mongodb+srv://ahmdalshayb77:Z3gTEUb9MlSWpufD@e-commerce.gh6zjub.mongodb.net/sharahah?retryWrites=true&w=majority&appName=Sarahah",
  collection: "mySessions",
});
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/message", messageRouter);
app.use(userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: `404 Not Found ${req.originalUrl}` });
});

connectDB();

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
