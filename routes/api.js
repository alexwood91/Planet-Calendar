var express = require('express');
var router = express.Router();

var EventsApi = require('../controllers/api/events')

router.get('/events', EventsApi.Index);

router.get('/fullevents', EventsApi.Full);

module.exports = router;