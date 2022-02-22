var Event = {};

var EventsController = {
 
  Create: function(req, res) {
    var event = new Event(req.body);
    }
};
    
module.exports = EventsController;