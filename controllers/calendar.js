var CalendarController = {
  Index: function(req, res) {
    res.render('views/calendar', { title: 'Planet' });
  }
};

module.exports = CalendarController;