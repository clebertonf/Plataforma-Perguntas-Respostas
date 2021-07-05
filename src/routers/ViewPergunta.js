const router = require('express').Router();
const { viewPergunta, createQuestion } = require('../controllers/ViewPerguntaController');

router.get('/', viewPergunta);
router.post('/', createQuestion);

module.exports = router;
