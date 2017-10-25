let expres = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app=expres();
 global.config = require('./config/config');

 let jwt    = require('jsonwebtoken');
 let jwt_secret = "shhh";
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8827));
let verifyToken = require('./middleware/verifyToken');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS,PUT");
  next();
});

let loginRoute=require('./login/loginRoute.js');
app.use('/api',loginRoute);
let provinsiRoute=require('./provinsi/provinsiRoute.js');
app.use('/api',verifyToken,provinsiRoute);
let kategoriObatRoute=require('./kategoriObat/kategoriObatRoute.js');
app.use('/api',kategoriObatRoute);
let jenisObatRoute=require('./jenisObat/jenisObatRoute.js');
app.use('/api',jenisObatRoute);
let variasiObatRoute=require('./variasiObat/variasiObatRoute.js');
app.use('/api',variasiObatRoute);

require("./koneksidb/koneksidb")
// mong.connect('mongodb://rudianton20:Sayangorangtua20@ds121665.mlab.com:21665/dbrumahsakit');
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
