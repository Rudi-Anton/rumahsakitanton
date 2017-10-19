let mong = require('mongoose');
let variasiobat = mong.Schema({
	KdVariasiObat:String,
		KdJenisObat:String,
		KdKategoriObat:String,
		NamaVariasiObat:String,
		HargaVariasiObat:String
});
let VariasiObat = module.exports = mong.model("VariasiObat", variasiobat, "VariasiObat");