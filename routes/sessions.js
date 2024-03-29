var express = require('express');
var router = express.Router();
const app = require('../app');

var SessionsController = require('../controllers/sessions');

router.get('/new', SessionsController.New);
router.post('/', SessionsController.Create);
router.get('/', SessionsController.Destroy);

module.exports = router;
