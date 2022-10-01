const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Setup schema
const peripheralSchema = Schema({
    uid: {
        type: String,
        required: true,
    },
    vendor: {
        type: String,
        required: true
    },
    isOnline: Boolean,

    dateCreated: {
        type: Number,
        default: Date.now()
    }
});
// Export Peripheral model
const Peripheral = mongoose.model('Peripheral', peripheralSchema);

module.exports = {
    getAll: (limit = 100) => {
        return Peripheral.find({}).limit(limit);
    },

    getByUid: (id = null) => {
        return Peripheral.find({uid: {$eq: id}}).limit(1);
    },

    create: async ( uid, vendor, isOnline) => {
        const newPeripheral = new Peripheral({
            uid,
            vendor,
            isOnline
        });
        return newPeripheral.save();
    },

    update: async ( uid, vendor, isOnline) => {
        return Peripheral.updateOne(
            {uid: {$eq: uid}},
            {$set: {vendor, isOnline}}
        );
    },

    delete: (id) => {
        return Peripheral.deleteOne({uid: {$eq: id}});
    }
}
