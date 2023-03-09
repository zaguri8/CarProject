

const mongoose = require('mongoose');

const CarRentalScheme = mongoose.Schema({
    car_rental_car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    car_rental_customer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    car_rental_branch: {
        type: mongoose.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    car_rental_start_date: {
        type: String,
        required: true
    },
    car_rental_end_date: {
        type: String,
        required: true
    },
    car_rental_price: {
        type: Number,
        required: true
    },
    car_toll_driving: {
        type: Boolean,
        required: true
    },
    car_toll_price: {
        type: Number,
        required: true
    },
    car_rental_has_waze: {
        type: Boolean,
        required: true
    },
    car_decoration: {
        type: Boolean,
        required: true
    },
    car_fuel_start: {
        type: Number,
        required: true
    },
    car_fuel_end: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.models.CarRental || mongoose.model("CarRental", CarRentalScheme)