const mongoose = require('mongoose');
// Setup schema
const gatewaySchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ipv4: {
        type: String,
        required: true
    },
    peripheral: {
        type: Array,
        default: []
    }
});
// Export IGateway model
const GatewayModel = module.exports = mongoose.model('gateway', gatewaySchema);
module.exports.get = function (callback, limit) {
    GatewayModel.find(callback).limit(limit);
}
