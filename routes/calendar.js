var express = require('express');
var router = express.Router();

var CalendarController = require('../controllers/calendar');

router.get('/', CalendarController.Index);

module.exports = router;
