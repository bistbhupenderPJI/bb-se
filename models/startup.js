var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StartupSchema = new Schema({
    name: {type: String, required: true, max: 100},
    country: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Startup', StartupSchema);