var express = require('express');
var router = express.Router();
var html_dir = './public/user/';
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.sendfile(html_dir + 'primera-votacion.html');
});
module.exports = router;

