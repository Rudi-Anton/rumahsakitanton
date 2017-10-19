let expres = require('express');
let route = expres.Router();
let JenisObatController=require('./jenisObatController.js');

route.get('/jenisobat', function (req, res) {
    JenisObatController.getJenisObat(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/jenisobat', function (req, res) {
    let jenisobat = req.body;
    JenisObatController.createJenisObat(jenisobat,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/jenisobat/:_id', function (req, res) {
    JenisObatController.removeJenisObat(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/jenisobat/:_id', function (req, res) {
     let jenisobat = req.body;
     JenisObatController.updateJenisObat(req.params._id,jenisobat,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/jenisobat/:_id', function (req, res) {
     let id = req.params._id;
    JenisObatController.getJenisObatById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;