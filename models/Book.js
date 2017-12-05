const mongoose = require('mongoose');
const db = require("./db.js");
//const ObjectId = require('mongodb').ObjectId();  // 必须引用 mongdb 包才能使用这个函数

//创建一个Book schema结构
const bookSchema = new mongoose.Schema({
    name :  {type : String},
    author:  {type : String},
    price :  {type : Number},
    press : {type:String}
});
//创建静态方法--列出所有图书
bookSchema.statics.findAll = function(callback) {
    this.model('Book').find(callback);
};
//创建静态方法--新增图书
bookSchema.statics.add = function(conditions,update,options,callback){
    this.model("Book").update(conditions, update, options, callback);
}

// 根据_id获得图书信息

bookSchema.statics.findOneBy_Id = function(id,callback){
	const sid =  mongoose.Types.ObjectId(id); 
	this.model('Book').find({_id:sid},callback);
};

// 删除图书
bookSchema.statics.delete = function(id,callback){
	const sid =  mongoose.Types.ObjectId(id); 
	this.model('Book').remove({_id:sid},callback);
}

// 修改图书根据图示_id
bookSchema.statics.update = function(id,update,options,callback){
    const sid =  mongoose.Types.ObjectId(id);
    this.model("Book").findByIdAndUpdate(sid, update, options, callback);
}
//创建一个图书模型
var bookModel = db.model('Book', bookSchema);
//向外暴露
module.exports = bookModel;