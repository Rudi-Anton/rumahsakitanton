let expres = require('express');
let route = expres.Router();
let VariasiObatController=require('./variasiObatController.js');

route.get('/variasiobat', function (req, res) {
    VariasiObatController.getVariasiObat(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/variasiobat', function (req, res) {
    let variasiobat = req.body;
    VariasiObatController.createVariasiObat(variasiobat,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/variasiobat/:_id', function (req, res) {
    VariasiObatController.removeVariasiObat(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/variasiobat/:_id', function (req, res) {
     let variasiobat = req.body;
     VariasiObatController.updateVariasiObat(req.params._id,variasiobat,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/variasiobat/:_id', function (req, res) {
     let id = req.params._id;
    VariasiObatController.getVariasiObatById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;