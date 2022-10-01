const express = require('express');
const router = express.Router();
const {
    getGateway,
    newGateway,
    viewGateway,
    updateGateway,
    deleteGateway
} = require('../controller/gatewayController')

router.get('/', getGateway);
router.post('/create', newGateway);
router.get('/view', viewGateway)
router.patch('/update', updateGateway)
router.delete('/delete', deleteGateway);


module.exports = router;
