const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api');

router.use('/homeRoutes', homeRoutes);

module.exports = router;