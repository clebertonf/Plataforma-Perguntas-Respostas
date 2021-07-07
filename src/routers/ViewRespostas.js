const router = require('express').Router();
const { createAnswer } = require('../controllers/ViewRespostaController');

router.get('/', createAnswer);

module.exports = router;
