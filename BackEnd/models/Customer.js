


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
    customer_address: {
        type: String,
        required: true
    },
    customer_type: {
        type: String,
        required: true
    },
    customer_company_name: {
        type: String,
        required: false
    },
    customer_company_id: {
        type: String,
        required: false
    },
})

const CustomerModel = mongoose.model("Customer", CustomerScheme)

module.exports = CustomerModel