let mong = require('mongoose');
let kategoriobat = mong.Schema({
	KdKategoriObat:String,
		NamaKategoriObat:String
});
let KategoriObat = module.exports = mong.model("KategoriObat", kategoriobat, "KategoriObat");