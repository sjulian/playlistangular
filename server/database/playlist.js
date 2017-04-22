var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaylistSchema = new Schema({

       nombre : {type:String, required:true},
 
});

module.exports = mongoose.model('Playlist',PlaylistSchema);