var express = require('express');
var router = express.Router();
const app = require('../app');
var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.post('/', HomeController.Create);
// router.post('/', HomeController.Avatar);


module.exports = router;
