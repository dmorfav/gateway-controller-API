const express = require('express');
const router = express.Router();
const {
    getGateway,
    newGateway,
    updateGateway,
    deleteGateway
} = require('../controller/gatewayController')

router.get('/', getGateway);
router.post('/create', newGateway);
router.put('/update', updateGateway);
router.delete('/delete', deleteGateway);


module.exports = router;
