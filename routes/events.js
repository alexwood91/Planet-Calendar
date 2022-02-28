var express = require('express');
const app = require('../app');
var router = express.Router();
var EventsController = require('../controllers/events');

router.get('/new', EventsController.New);
router.post('/new', EventsController.Create);


module.exports = router;