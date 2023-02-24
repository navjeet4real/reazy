const mongoose = require('mongoose');

const businessDetail = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
    },
    logo: {
        type: String,
    },
    address: {
        type: String,
    },
    suburb: {
        type: String,
    },
    postCode: {
        type: String,
    },
    state: {
        type: String,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('BusinessDetail', businessDetail);