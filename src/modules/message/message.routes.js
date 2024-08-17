const { Router } = require("express");
const { sendMsg, message } = require("./message.controller");

const messageRouter = Router();

messageRouter.get("/message", message);

messageRouter.post("/sendMsg/:id", sendMsg);

module.exports = messageRouter;
