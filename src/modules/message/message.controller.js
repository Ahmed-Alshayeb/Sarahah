const messageModel = require("../../../DB/models/message.model");

module.exports.sendMsg = async (req, res) => {
  await messageModel.create({ content: req.body.msg, userId: req.params.id });
  res.redirect(`/user/${req.params.id}`);
};

module.exports.message = async (req, res) => {
  const messages = await messageModel.find({ userId: req.session.userId });

  console.log(messages);

  if (req.session.loggedIn) {
    res.render("messages", { loggedIn: req.session.loggedIn, session: req.session, messages });
  } else {
    res.redirect("/login");
  }
};
