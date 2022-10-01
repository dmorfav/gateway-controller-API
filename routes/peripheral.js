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
router.post('/create', newPeripheral);
router.get('/view', viewPeripheral)
router.patch('/update', updatePeripheral)
router.delete('/delete', deletePeripheral);


module.exports = router;
