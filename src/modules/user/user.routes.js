const { Router } = require("express");
const {
  index,
  login,
  register,
  user,
  handleRegister,
  handleLogin,
  logOut,
} = require("./user.controller");

const userRouter = Router();

userRouter.get("/", index);

userRouter.get("/login", login);

userRouter.get("/register", register);

userRouter.get("/user/:userId", user);

userRouter.get("/logOut", logOut);

userRouter.post("/handleRegister", handleRegister);

userRouter.post("/handleLogin", handleLogin);

module.exports = userRouter;
