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
router.post('/gateway/create', newGateway);
router.get('/gateway/:gt_id/view', viewGateway)
router.patch('/gateway/update', updateGateway)
router.delete('/gateway/delete', deleteGateway);


module.exports = router;
