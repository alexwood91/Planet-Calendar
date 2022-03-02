var express = require('express');
const app = require('../app');
var router = express.Router();

var CalendarController = require('../controllers/calendar');
const EventsController = require('../controllers/events');

router.get('/', CalendarController.Index);
router.get('/groupcal',CalendarController.Groupcal )
/*router.post('/', EventsController.Create)*/

module.exports = router;
