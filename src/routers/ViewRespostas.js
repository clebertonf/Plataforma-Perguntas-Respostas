const router = require('express').Router();
const { createAnswer } = require('../controllers/ViewRespostaController');

router.post('/', createAnswer);

module.exports = router;
