const express = require('express');
const router = express.Router();
const {
    getGateway,
    newGateway,
    updateGateway,
    deleteGateway,
    deletePeripheralInGateway
} = require('../controller/gatewayController.js')

router.get('/', getGateway);
router.post('/create', newGateway);
router.put('/update', updateGateway);
router.delete('/delete', deleteGateway);
router.delete('/delete/peripheral', deletePeripheralInGateway);


module.exports = router;
