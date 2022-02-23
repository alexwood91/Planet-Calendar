var express = require('express');
<<<<<<< HEAD
const app = require('../app');
=======
>>>>>>> c8b470a4e3df58690e8d827f3dc90d238e664668
var router = express.Router();

var CalendarController = require('../controllers/calendar');

router.get('/', CalendarController.Index);

module.exports = router;
