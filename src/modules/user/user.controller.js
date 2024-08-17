const userModel = require("../../../DB/models/user.model");

module.exports.index = (req, res) => {
  res.render("index.ejs", { loggedIn: false });
};

module.exports.login = (req, res) => {
  res.render("login.ejs", { error: req.query.error, loggedIn: false });
};

module.exports.register = (req, res) => {
  res.render("register.ejs", { error: req.query.error, loggedIn: false });
};

module.exports.user = (req, res) => {
  res.render("user.ejs", { loggedIn: req.session.loggedIn, session: req.session });
};

module.exports.handleRegister = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    return res.redirect("/register?error=Email already exists");
  }

  await userModel.create({ name, email, password });

  res.redirect("/login");
};

module.exports.handleLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user || user.password !== password) {
    return res.redirect("/login?error=Email not exists or invaled password");
  }

  req.session.userId = user._id;
  req.session.name = user.name;
  req.session.url = `${req.protocol}://${req.headers.host}/user/${req.session.userId}`;
  req.session.loggedIn = true;

  // return res.redirect(url);

  res.render("messages.ejs", { loggedIn: req.session.loggedIn, session: req.session});
};

module.exports.logOut = async (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
};
