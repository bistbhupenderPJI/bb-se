var express = require('express');
////const cors = require('cors');
var bodyParser = require('body-parser');

var startup = require('./routes/startup'); // Imports routes for the startups
var app = express();

//app.use(cors());




// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://startup:startup1@ds359118.mlab.com:59118/startup';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/startups', startup);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});