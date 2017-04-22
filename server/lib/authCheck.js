var cbs = require('./callbacks');

module.exports = function (req, res, next) {
    if (req.method === 'GET' || req.session.authenticated) {
        next();
    } else {
        cbs.devolerError(res, 403)({
            msg: 'No estas logeado'
        });
    }
}