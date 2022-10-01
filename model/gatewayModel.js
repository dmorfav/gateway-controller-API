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
module.exports = mongoose.model('Gateway', gatewaySchema);
