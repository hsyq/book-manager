const express = require('express');
const router = express.Router();
const Book = require('../models/Book.js');


router.get('/', function(req, res, next) {
	Book.findAll(function(err,result){
		if(err){console.log(err);}
		res.render('index',{
			books:result
		});
	});
});

module.exports = router;
