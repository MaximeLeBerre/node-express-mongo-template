const express = require('express');
const WildersModel = require('../controllers/wilders');

const router = express.Router();


router.get('/', WildersModel.find);
router.get('/:id', WildersModel.findOne)
router.post('/', WildersModel.create);
router.put('/:id',  WildersModel.update);
router.delete('/:id',WildersModel.delete);

module.exports = router;