const router = require('express').Router();
const { viewPergunta, createQuestion, listQuestions } = require('../controllers/ViewPerguntaController');

router.get('/', listQuestions);
router.get('/pergunta', viewPergunta);
router.post('/pergunta', createQuestion);

module.exports = router;
