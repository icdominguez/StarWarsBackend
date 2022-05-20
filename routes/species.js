const { Router } = require('express');

const router = Router();

const { getAll } = require('../controllers/species');

router.get('/', [], getAll);

module.exports = router;