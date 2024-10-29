var express = require('express');
var router = express.Router();

let carsController = require('../controllers/cars');

/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', carsController.list);
router.post('/create', carsController.create);
router.get('/get/:carID', carsController.carGet, carsController.carByID);
router.put('/edit/:carID', carsController.update);
router.delete('/delete/:carID', carsController.remove);

module.exports = router;
