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
const Gateway = mongoose.model('Gateway', gatewaySchema);


module.exports = {
    getAll: (limit = 100) => {
        return Gateway.find({}).limit(limit);
    },

    getByUid: (id = null) => {
        return Gateway.find({uid: {$eq: id}}).limit(1);
    },

    create: async (uid, name, ipv4, peripheral) => {
        const newGateway = new Gateway({
            uid,
            name,
            ipv4,
            peripheral
        });
        return newGateway.save();
    },

    update: async (uid, name, ipv4, peripheral) => {
        return Gateway.updateOne(
            {uid: {$eq: uid}},
            {
                $set: {name, ipv4, peripheral},
            }
        );
    },

    delete: (id) => {
        return Gateway.deleteOne({uid: {$eq: id}});
    },

    deletePeripheral: (gatewayId, peripheralId) => {
        return Gateway.updateOne({uid: {$eq: gatewayId}}, {$pull: {peripheral: peripheralId}});
    }
}
