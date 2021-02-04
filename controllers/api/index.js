const router = require('express').Router();

const userRoutes = require('./user-routes');


//connections go in here

router.use('/users', userRoutes);

module.exports = router;