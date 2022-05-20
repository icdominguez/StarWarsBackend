const { Router } = require('express');

const router = Router();

const { getAll, getByPage, getByName } = require('../controllers/vehicles');

router.get('/', [], getAll);

router.get('/page/:page', getByPage)

router.get('/:name', getByName)

module.exports = router;