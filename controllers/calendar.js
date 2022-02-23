var CalendarController = {
  Index: function(req, res) {
    res.render('calendar', { title: 'Planet' });
  }
};

module.exports = CalendarController;