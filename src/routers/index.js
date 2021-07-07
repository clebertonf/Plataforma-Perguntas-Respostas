const router = require('express').Router();

const ViewIndex = require('./ViewIndex');
const ViewPergunta = require('./ViewPergunta');
const ViewResposta = require('./ViewRespostas');

router.use('/', ViewIndex);
router.use('/pergunta', ViewPergunta);
router.use('/resposta', ViewResposta);

module.exports = router;
