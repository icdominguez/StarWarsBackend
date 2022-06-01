const { Router } = require('express');
const router = Router();
const { getAll, getByName } = require('../controllers/starships');

router.get('/', [], getAll);
router.get('/:name', getByName);

module.exports = router;