const { Router } = require('express');
const router = Router();
const { getAll, getByName } = require('../controllers/characters');

router.get('/', [], getAll);
router.get('/:name', getByName)

module.exports = router;