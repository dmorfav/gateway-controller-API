
const gateway = require('../model/gatewayModel');

module.exports = {
// Display list of all Gateways.
    getGateway: (req, res) => {
        res.send("NOT IMPLEMENTED: Gateway list");
    },

// Add a new Gateway.
    newGateway: (req, res) => {
        res.send(`NOT IMPLEMENTED: new Gateway:`);
    },

// Display Gateway create form on GET.
     viewGateway: (req, res) => {
        res.send(`NOT IMPLEMENTED: Gateway detail: ${req.params.id}`);
    },

// Handle Gateway update.
     updateGateway: (req, res) => {
        res.send("NOT IMPLEMENTED: Gateway update PUT");
    },

// Delete gateway.
     deleteGateway: (req, res) => {
        res.send("NOT IMPLEMENTED: Gateway delete DELETE");
    },
}
