// require modules
const router = require('express').Router();
const usersCtrl = require('../../controllers/users');

// setup router object



// require the controller


// define a signup route
router.post('signup', usersCtrl.signup);

// export your router
module.exports = router;