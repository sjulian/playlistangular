
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({ 
    secret: 'musica', 
    resave: false, 
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}));
app.use(bodyParser.json());

require('./database/conexion');

var rest = require('./rest');

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', rest);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(8080);