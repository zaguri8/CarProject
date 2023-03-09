const CarRental = require("../models/CarRental");

const addNewRental = async (rental) => {
    const newRental = new CarRental(rental);
    return await newRental.save()
}

const editRental = async (rental) => {
    await CarRental.findByIdAndUpdate(rental._id, rental)
    return rental
}

const deleteRental = async (rental) => {
    await CarRental.findByIdAndDelete(rental._id)
    return rental
}

const getAllRentals = async () => {
    const rentals = await CarRental.find({})
        .populate("car_rental_car")
        .populate("car_rental_customer")
    return rentals
}

const getAllCustomerRentals = async (customer) => {
    const rentals = await CarRental.find({ car_rental_customer: customer })
        .populate("car_rental_car")
        .populate("car_rental_customer")
    return rentals
}

const getAllRentalsByCar = async (car) => {
    const rentals = await CarRental.find({ car_rental_car: car })
        .populate("car_rental_car")
        .populate("car_rental_customer")
    return rentals
}

const getAllCustomerRentalsForBranch = async (branch) => {
    const rentals = await CarRental.find({ car_rental_branch: branch })
        .populate("car_rental_car")
        .populate("car_rental_customer")

    return rentals
}


module.exports = {
    addNewRental,
    editRental,
    deleteRental,
    getAllRentals,
    getAllRentalsByCar,
    getAllCustomerRentals,
    getAllCustomerRentalsForBranch
}