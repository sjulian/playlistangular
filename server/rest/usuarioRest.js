var cbs = require('./../lib/callbacks');
var express = require('express');
var usuarioRest = express();
var usuarioModelo = require('./usuarioModelo');

usuarioRest.get('', function(req, res) {
    usuarioModelo.listar()
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

usuarioRest.get('/:id', function(req, res) {
    usuarioModelo.listar({ _id: req.params.id })
        .then(function (usuarios) {
            if (usuarios && usuarios.length) {
                res.json(usuarios[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

usuarioRest.post('', function(req, res) {
    usuarioModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

usuarioRest.put('/:id', function(req, res) {
    usuarioModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

usuarioRest.delete('/:id', function(req, res) {
    usuarioModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = usuarioRest;