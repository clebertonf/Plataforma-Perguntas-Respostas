const router = require('express').Router();

const ViewIndex = require('./ViewIndex');

router.use('/', ViewIndex);

module.exports = router;
