var express = require('express');
var router = express.Router();

var GroupEventsApi = require('../controllers/api/groupevents')

router.get('/events', GroupEventsApi.Index);

module.exports = router;