const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');


//connections go in here

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;