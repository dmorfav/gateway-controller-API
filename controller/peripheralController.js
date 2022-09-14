
const peripheral = require('../model/peripheralModel');

module.exports = {
// Display list of all Peripheral.
    getPeripheral: (req, res) => {
        res.send("NOT IMPLEMENTED: Peripheral list");
    },

// Add a new Peripheral.
    newPeripheral: (req, res) => {
        res.send(`NOT IMPLEMENTED: new Peripheral:`);
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
