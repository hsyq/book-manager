const express = require('express');
const router = express.Router();
const Book = require('../models/Book.js');

router.get('/', function(req, res, next) {
	//console.log(req.query.id);
	Book.findOneBy_Id(req.query.id,function(err,result){
		if(err){console.log(err);}
		// console.log(result);
		res.render('edit',{
			book:result
		});
	});
});

router.post('/', function(req, res, next) {
	//console.log(req.originalUrl);
	//console.log(req.url);
	
	const name = req.body.name;
	const author = req.body.author;
	const press = req.body.press;
	const price = req.body.price;
	const id = req.body._id;
	const update = {name:name,author:author,press:press,price:price};
	const options = {upsert : true};
    Book.findByIdAndUpdate(id, update, options, function(err,result){
   	if(err){
   		res.send('更新失败!');
   	}
   	    console.log(req.body);
	    res.send('更新成功!');
  });
  //console.log(req.query);
  //res.end();
});

module.exports = router;
