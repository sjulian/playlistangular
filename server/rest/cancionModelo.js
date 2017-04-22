var db = require('./../database');

function CancionModelo(){}

    CancionModelo.prototype.listar = function(parametros){

        parametros = parametros || {};
        return db.cancion.find(parametros).exec();
    };

    CancionModelo.prototype.crear = function(data) {
        return db.cancion.create(data);
    };
    
    CancionModelo.prototype.actualizar = function(id, data) {
        return db.cancion.findOneAndUpdate({
            _id: id
        }, data, { new: true }).exec();
    };


    CancionModelo.prototype.eliminar = function(id) {
        return db.cancion.findOneAndRemove({ _id: id}).exec();
    }

    module.exports = new CancionModelo();