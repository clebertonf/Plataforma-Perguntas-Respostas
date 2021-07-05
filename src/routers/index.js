const router = require('express').Router();

const ViewIndex = require('./ViewIndex');
const ViewPergunta = require('./ViewPergunta');

router.use('/', ViewIndex);
router.use('/pergunta', ViewPergunta);

module.exports = router;
