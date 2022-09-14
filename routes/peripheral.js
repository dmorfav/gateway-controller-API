const express = require('express');
const router = express.Router();
const {
    getPeripheral,
    newPeripheral,
    viewPeripheral,
    updatePeripheral,
    deletePeripheral
} = require('../controller/PeripheralController')

router.get('/', getPeripheral);
router.post('/peripheral/create', newPeripheral);
router.get('/peripheral/:id/view', viewPeripheral)
router.patch('/peripheral/update', updatePeripheral)
router.delete('/peripheral/delete', deletePeripheral);


module.exports = router;
