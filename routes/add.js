var express = require('express');
var router = express.Router();
const Book = require('../models/Book.js');

router.get('/', function(req, res, next) {
	res.render('add');
	//next();
});

router.post('/',function(req,res,next){
	/*console.log(req.originalUrl);
	console.log(req.url);
	console.log(req.body);
	console.log(req.body.name);
	console.log(req.body.author);
	console.log(req.body.press);
	console.log(req.body.price);*/
	Book.create(req.body,function(err){
		if(err){
			res.send('添加失败!');
		}
		res.send('添加成功!');
		});
});

module.exports = router;
