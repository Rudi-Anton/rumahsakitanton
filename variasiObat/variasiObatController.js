VariasiObat=require('./variasiObatModel.js');
module.exports.getVariasiObat=function(callback,limit){
    VariasiObat.find(callback).limit(limit);
}
module.exports.createVariasiObat=function(variasiobat,callback){
    VariasiObat.create(variasiobat,callback);
}
module.exports.removeVariasiObat=function(_id,callback){
    VariasiObat.findByIdAndRemove(_id,callback);
}
module.exports.updateVariasiObat=function(_id,variasiobat,callback){
    VariasiObat.findByIdAndUpdate(_id,variasiobat,callback);
}
module.exports.getVariasiObatById=function(id,callback){
    VariasiObat.findById(id,callback);
}