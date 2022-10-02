const express = require('express');
const router = express.Router();
const {
    getPeripheral,
    newPeripheral,
    updatePeripheral,
    deletePeripheral
} = require('controller/PeripheralController')

router.get('/', getPeripheral);
router.post('/create', newPeripheral);
router.put('/update', updatePeripheral);
router.delete('/delete', deletePeripheral);


module.exports = router;
