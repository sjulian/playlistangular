var express = require('express');
var rest = express();
var authCheck = require('./../lib/authCheck');

rest.use('/session', require('./sessionRest'));
rest.use(authCheck);
rest.use('/usuario', require('./usuarioRest'));
rest.use('/playlist', require('./playlistRest'));
rest.use('/cancion', require('./cancionRest'));

module.exports = rest;