const GatewayModel = require('../model/gatewayModel');
const rxIPv4 = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
const maxGatewaySize = 10;
module.exports = {
// Display list of all Gateways.
    getGateway: async (req, res) => {
        try {
            const gateway = (req.query?.id == null || false) ? await GatewayModel.getAll() : ((await GatewayModel.getByUid(req.query?.id))[0] || []);
            res.json(gateway);
        } catch (e) {
            console.error(e);
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Add a new Gateway.
    newGateway: async (req, res) => {
        try {
            const gateway = JSON.parse(req.body);
            if (!gateway.uid || !gateway.name || !gateway.ipv4 || !gateway.peripheral || !gateway.peripheral instanceof Array) {
                throw Error('Invalid Data')
            }

            if (!rxIPv4.test(gateway.ipv4)) {
                throw Error('Invalid IP format')
            }

            if ((await GatewayModel.getByUid(gateway.uid))?.length !== 0) {
                throw Error('Gateway exist')
            }

            if (gateway.peripheral?.length > maxGatewaySize) {
                throw Error('Only ten peripheral can save in a gateway.')
            }

            res.json(await GatewayModel.create(gateway.uid, gateway.name, gateway.ipv4, gateway.peripheral));
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Handle Gateway update.
    updateGateway: async (req, res) => {
        try {
            const gateway = JSON.parse(req.body);
            const gatewayId = req.query?.id;
            const gatewayCheck = await GatewayModel.getByUid(gatewayId);
            const actualGatewayLength = (gatewayCheck[0] ? gatewayCheck[0]?.peripheral?.length : 0) + gateway.peripheral?.length;
            if (!gatewayId || !gateway.name || !gateway.ipv4 || !gateway.peripheral || !gateway.peripheral instanceof Array) {
                throw Error('Invalid Data')
            }

            if (!rxIPv4.test(gateway.ipv4)) {
                throw Error('Invalid IP format')
            }

            if (gatewayCheck?.length === 0) {
                throw Error('Gateway not exist')
            }

            if (actualGatewayLength > maxGatewaySize) {
                throw Error('This gateway is filled.')
            }

            res.json(await GatewayModel.update(gatewayId, gateway.name, gateway.ipv4, gateway.peripheral));
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Delete gateway.
    deleteGateway: async (req, res) => {
        try {
            if (req.query?.id == null) {
                throw Error('Must send a uid')
            }
            const deleteResp = await GatewayModel.delete(req.query?.id);

            if (deleteResp?.deletedCount === 0) {
                throw Error('We can\'t delete a element that not exist ')
            }
            res.send({status: deleteResp?.acknowledged || false});
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },
}
