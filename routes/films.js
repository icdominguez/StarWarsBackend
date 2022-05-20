const { Router } = require('express');

const router = Router();

const { getAll } = require('../controllers/films');

router.get('/', [], getAll);

module.exports = router;