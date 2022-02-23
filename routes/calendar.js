var express = require('express');
const app = require('../app');
var router = express.Router();

var CalendarController = require('../controllers/calendar');

router.get('/', CalendarController.Index);

module.exports = router;
