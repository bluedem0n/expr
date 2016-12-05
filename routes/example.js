var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET handler for client');
});
router.post('/',function(req,res){
	res.send('POST handler for client')
});

module.exports = router;




