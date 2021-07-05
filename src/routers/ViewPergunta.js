const router = require('express').Router();
const { viewPergunta } = require('../controllers/ViewPerguntaController');

router.get('/', viewPergunta);

module.exports = router;
