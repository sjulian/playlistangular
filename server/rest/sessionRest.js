var cbs = require('./../lib/callbacks');
var express = require('express');
var usuarioRest = express();
var usuarioModelo = require('./usuarioModelo');

usuarioRest.get('/usuario', function(req, res) {
    let u = req.session.usuario || {};
    usuarioModelo.listar({ _id: u._id })
        .then(function (err, usuarios) {
            res.json(usuarios[0] || {});
        });
});

usuarioRest.post('/registrar', function(req, res) {
    usuarioModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

usuarioRest.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    usuarioModelo.listar({ email: email, password: password })
        .then(function (usuarios) {
            if (usuarios && usuarios.length) {
                req.session.authenticated = true;
                let usuario = usuarios[0];
                delete usuario.password;
                req.session.usuario = usuario;
                res.json(usuario);
            } else {
                cbs.devolerError(res, 401)({
                    msg: 'Usuario invalido'
                });
            }
        }, cbs.devolerError(res, 500));
});

usuarioRest.post('/logout', function(req, res) {
    req.session.authenticated = false;
    delete req.session.usuario;
    res.json({ msg: 'ok' });
});

module.exports = usuarioRest;