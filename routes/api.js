var express = require('express');
var router = express.Router();

var EventsApi = require('../controllers/api/events')

router.get('/events', EventsApi.Index);

module.exports = router;