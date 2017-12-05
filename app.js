const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const add = require('./routes/add');
const edit = require('./routes/edit');
const del = require('./routes/delete');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //设置为false取不到body参数

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/add', add);
app.use('/edit', edit);
app.use('/delete', del);

app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('error');
});

app.listen(3000);
console.log('Server is running at 127.0.0.1:3000');

module.exports = app;
