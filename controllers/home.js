var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Planet' });
  }
};

module.exports = HomeController;
