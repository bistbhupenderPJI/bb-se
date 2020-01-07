var Startup = require('../models/startup');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Messages from the Startup API!');
};

exports.startup_create = function (req, res) {
    var startup = new Startup(
        {
            name: req.body.name,
            country: req.body.country
        }
    );

    startup.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Startup Created successfully')
    })
};

exports.startup_get = (req, res) => {
    Startup.find()
    .then(startups => {
        res.send(startups);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving startups."
        });
    });
};
