


const mongoose = require('mongoose')

const CustomerScheme = new mongoose.Schema({
    customer_first_name: {
        type: String,
        required: true
    },
    customer_last_name: {
        type: String,
        required: true
    },
    customer_passport_id: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    customer_account_management_id: {
        type: String,
        required: true
    },
    customer_birth_date: {
        type: String,
        required: true
    },
    customer_age: {
        type: String,
        required: true
    },
    customer_driver_license_id: {
        type: String,
        required: true
    },
    customer_driver_licence_expiration_date: {
        type: String,
        required: true
    },
    customer_street: {
        type: String,
        required: true
    },
    customer_city: {
        type: String,
        required: true
    },
    customer_postal_code: {
        type: String,
        required: true
    },
    payment_info: {
        required: false,
        card_number: {
            type: String,
            required: true
        },
        card_holder_name: {
            type: String,
            required: true
        },
        card_expiration_date: {
            type: String,
            required: true
        },
        card_cvv: {
            type: String,
            required: true
        },
        comments: {
            type: String,
            required: false
        }
    },
    customer_type: {
        type: String,
        required: true
    },
    license_image: {
        type: String,
        required: false
    },
    passport_image: {
        type: String,
        required: false
    },
    customer_company_name: {
        type: String,
        required: false
    },
    customer_branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
    },
    customer_company_id: {
        type: String,
        required: false
    },
})

module.exports = mongoose.models.Customer || mongoose.model("Customer", CustomerScheme)