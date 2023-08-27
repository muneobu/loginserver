const homeControl = {
  home: (req, res) => {
    res.render("../render/index.ejs");
  },
  login: (req, res) => {
    res.render("../render/login.ejs");
  },
};
module.exports = homeControl;
