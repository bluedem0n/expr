var express = require('express');
var router = express.Router();
var html_dir = './public/';
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.sendfile(html_dir + 'index.html');
});

module.exports = router;

