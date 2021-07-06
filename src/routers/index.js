const router = require('express').Router();

const ViewPergunta = require('./ViewPergunta');

router.use('/', ViewPergunta);

module.exports = router;
