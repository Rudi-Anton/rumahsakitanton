let expres = require('express');
let route = expres.Router();
let KategoriObatController=require('./kategoriObatController.js');

route.get('/kategoriobat', function (req, res) {
    KategoriObatController.getKategoriObat(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/kategoriobat', function (req, res) {
    let kategoriobat = req.body;
    KategoriObatController.createKategoriObat(kategoriobat,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/kategoriobat/:_id', function (req, res) {
    KategoriObatController.removeKategoriObat(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/kategoriobat/:_id', function (req, res) {
     let kategoriobat = req.body;
     KategoriObatController.updateKategoriObat(req.params._id,kategoriobat,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/KategoriObat/:_id', function (req, res) {
     let id = req.params._id;
    KategoriObatController.getKategoriObatById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;