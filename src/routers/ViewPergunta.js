const router = require('express').Router();
const {
  viewPergunta, createQuestion, listQuestions, findQuestionById,
} = require('../controllers/ViewPerguntaController');

router.get('/', listQuestions);
router.get('/pergunta', viewPergunta);
router.post('/pergunta', createQuestion);
router.get('/pergunta/:id', findQuestionById);

module.exports = router;
