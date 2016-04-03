var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var data = [{user: 'Jalal'}]

  res.json(data)

})

module.exports = router;
