const mongoose = require('mongoose');
// Setup schema
const peripheralSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    isOnline: Boolean,

    dateCreated: {
        type: Date,
        default: Date.now
    }
});
// Export IPeripheral model
const peripheral = module.exports = mongoose.model('peripheral', peripheralSchema);
module.exports.get = function (callback, limit) {
    peripheral.find(callback).limit(limit);
}
