const router = require('express').Router();
const { viewContoller } = require('../controllers/ViewIndexController');

router.get('/', viewContoller);

module.exports = router;
