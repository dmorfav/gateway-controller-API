const Peripheral = require('../model/peripheralModel');

module.exports = {
// Display list of all Peripheral.
    getPeripheral: async (req, res) => {
        try {
            const peripheralList = await Peripheral.get();
            res.json(peripheralList);
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

            const newPeripheral = new Peripheral(peripheral);
            res.send(await newPeripheral.save());
        } catch (e) {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    },

// Display Peripheral create form on GET.
    viewPeripheral: (req, res) => {
        res.send(`NOT IMPLEMENTED: Peripheral detail: ${req.params.id}`);
    },

// Handle Peripheral update.
    updatePeripheral: (req, res) => {
        res.send("NOT IMPLEMENTED: Peripheral update PUT");
    },

// Delete Peripheral.
    deletePeripheral: (req, res) => {
        res.send("NOT IMPLEMENTED: Peripheral delete DELETE");
    },
}
