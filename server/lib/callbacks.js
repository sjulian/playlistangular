module.exports = {
    devolverParametro: function (res) {
        return function(p) {
            res.json(p);    
        };
    },
    devolerError: function (res, status) {
        return function (error) {
            res.status(status).json(error);
        }
    }
};