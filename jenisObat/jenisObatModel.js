let mong = require('mongoose');
let jenisobat = mong.Schema({
	KdKategoriObat:String,
		KdJenisObat:String,
		NamaJenisObat:String
});
let JenisObat = module.exports = mong.model("JenisObat", jenisobat, "JenisObat");