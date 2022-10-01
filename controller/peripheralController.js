const PeripheralModel = require('../model/peripheralModel');

module.exports = {
// Display list of all Peripheral.
    getPeripheral: async (req, res) => {
        try {
            const peripherals = (req.query?.id == null || false) ? await PeripheralModel.getAll() : ((await PeripheralModel.getByUid(req.query?.id))[0] || []);
            res.json(peripherals);
        } catch (e) {
            console.error(e);
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Add a new Peripheral.
    newPeripheral: async (req, res) => {
        try {
            const peripheral = JSON.parse(req.body)
            if (!peripheral.uid || !peripheral.vendor || !peripheral.isOnline) {
                throw Error('Invalid Data')
            }

            if ((await PeripheralModel.getByUid(peripheral.uid))?.length !== 0) {
                throw Error('Peripheral exist')
            }

            res.json(await PeripheralModel.create(peripheral.uid, peripheral.vendor,peripheral.isOnline));
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Handle Peripheral update.
    updatePeripheral: async (req, res) => {
        try {
            const peripheralId = req.query?.id;
            const peripheral = JSON.parse(req.body)
      
            if( peripheralId== null){
                throw Error('Must send the uid of peripheral for update')
            }

            if ((await PeripheralModel.getByUid(peripheralId))?.length === 0) {
                throw Error('Peripheral not exist')
            }

            if (!peripheral.vendor || !peripheral.isOnline instanceof Boolean) {
                throw Error('Invalid Data')
            }
            const respUpdatePeripheral = await PeripheralModel.update(peripheralId, peripheral.vendor,peripheral.isOnline);
           res.json(respUpdatePeripheral);
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Delete Peripheral.
    deletePeripheral: async (req, res) => {
        try {
            if (req.query?.id == null) {
                throw Error('Must send a uid')
            }
            const deleteResp = await PeripheralModel.delete(req.query?.id);

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
