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
const peripheral = module.exports = mongoose.model('Peripheral', peripheralSchema);

module.exports = {
    get: (limit = 100) => {
        return peripheral.find({}).limit(limit);
    }
}
