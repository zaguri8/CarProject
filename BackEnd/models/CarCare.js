
const mongoose = require('mongoose')

const CarCareSchema = new mongoose.Schema({
    car_care_car: {
        type: mongoose.Types.ObjectId,
        ref: "Car",
        required: true
    },
    car_care_customer: {
        type: mongoose.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    car_care_name: {
        type: String,
        required: true
    },
    car_care_branch: {
        type: mongoose.Types.ObjectId,
        ref: "Branch",
        required: true
    }
})


module.exports = mongoose.models.CarCare || mongoose.model("CarCare", CarCareSchema)