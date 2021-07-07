const router = require('express').Router();
const {
  viewPergunta, createQuestion, findQuestionById,
} = require('../controllers/ViewPerguntaController');

router.get('/', viewPergunta);
router.post('/', createQuestion);
router.get('/:id', findQuestionById);

module.exports = router;
