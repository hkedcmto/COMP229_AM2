var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json({ title: 'Express' });
  res.send('Welcome to Portfolio Backend API');
});

module.exports = router;
