// (community) npm install express
var express = require('express');
var router = express.Router();
// NODE API module
//var request = require('request')

// ? hvad skal jeg huske her ?
// COMMUNITY MODULE
var request  	= require( "request-promise" )

//system module node API 
var path = require('path')


/* GET home page. */
router.get('/', function(req, res, next) {
  
  //var data = require(path.join(__dirname,'../','db' ,'data.json'))
    
    request('http://couchdb.itacademy.dk/bogi/2016' )
    .then(function(data){
	  	res.render('index', JSON.parse( data ).products );
	  })
  
});

module.exports = router;
