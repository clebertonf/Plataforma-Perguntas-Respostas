const router = require('express').Router();
const { listQuestions } = require('../controllers/ViewPerguntaController');

router.get('/', listQuestions);

module.exports = router;
