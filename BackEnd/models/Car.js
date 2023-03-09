
const mongoose = require('mongoose')

const CarScheme = new mongoose.Schema({
    car_license_number: {
        type: String,
        required: true
    },
    car_rented_by: {
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'Customer',
    },
    car_type: {
        type: String,
        required: true
    },
    car_manufacturer: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    car_passkey: {
        type: String,
        required: true
    },
    car_towing_company: {
        type: String,
        required: true
    },
    car_agent: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    },
    car_manufacture_year: {
        type: String,
        required: true
    },
    car_color: {
        type: String,
        required: true
    },
    car_engine_capacity: {
        type: String,
        required: true
    },
    car_daily_price: {
        type: String,
        required: true
    },
    car_monthly_price: {
        type: String,
        required: true
    },
    car_fuel_type: {
        type: String,
        required: true
    },
    car_fuel: {
        type: String,
        required: true
    },
    car_chassis_type: { // שלדה
        type: String,
        required: true
    },
    car_license_fee: {
        type: String,
        required: true
    },
    car_license_expiration: {
        type: String,
        required: true
    },
    car_kilometrage: {
        type: String,
        required: true
    },
    car_km_limit: {
        type: String,
        required: true
    },
    car_extra_km_price: {
        type: String,
        required: true
    },
    car_entry_date: { //  תאריך עלייה לכביש
        type: String,
        required: true
    },
    car_deductible_price: {// מחיר השתתפות עצמית
        type: String,
        required: true
    },
    car_hand: {
        type: String,
        required: true
    },
    car_images: [{
        type: String,
        required: true
    }],
    car_branch: {
        type: mongoose.Types.ObjectId,
        ref: "Branch",
        required: true
    }
})


module.exports = mongoose.models.Car || mongoose.model("Car", CarScheme)