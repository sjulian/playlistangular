var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({

       nombre : {type:String, required:true},
       Email :  {type:String, required:true, unique:true},
       Password :{type:String, required:true},
       Imagen : String
 
});

module.exports = mongoose.model('Usuario',UsuarioSchema);