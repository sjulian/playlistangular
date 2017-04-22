var db = require('./../database');

function PlaylistModelo(){}

    PlaylistModelo.prototype.listar = function(parametros){

        parametros = parametros || {};
        return db.playlist.find(parametros).exec();
    };


    module.exports = new PlaylistModelo();