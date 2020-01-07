var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var startup_controller = require('../controllers/startup');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', startup_controller.test);


router.post('/create', startup_controller.startup_create);

router.get('/all', startup_controller.startup_get);

module.exports = router;