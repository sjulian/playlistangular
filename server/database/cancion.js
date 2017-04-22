var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CancionSchema = new Schema({

       Nombre : {type:String, required:true},
       Autor : String,
       Tags : String,
       Url :{type:String, required:true},
       IdPlaylist: {type:String, required:true},

});

module.exports = mongoose.model('Cancion',CancionSchema);