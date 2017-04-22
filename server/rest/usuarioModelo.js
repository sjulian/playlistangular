var db = require('./../database');

function UsuarioModelo(){}

    UsuarioModelo.prototype.listar = function(parametros){

        parametros = parametros || {};
        return db.usuario.find(parametros).exec();
    };

    UsuarioModelo.prototype.crear = function(data) {
        return db.usuario.create(data);
    };
    
    UsuarioModelo.prototype.actualizar = function(id, data) {
        return db.usuario.findOneAndUpdate({
            _id: id
        }, data, { new: true }).exec();
    };


    UsuarioModelo.prototype.eliminar = function(id) {
        return db.usuario.findOneAndRemove({ _id: id}).exec();
    }

    module.exports = new UsuarioModelo();