const CarModel = require("../models/Car")

const addNewCar = async (car) => {
    const newCar = new CarModel(car);
    return await newCar.save()
}

const editCar = async (car) => {
    await CarModel.findByIdAndUpdate(car._id, car)
    return car
}

const deleteCar = async (car) => {
    await CarModel.findByIdAndDelete(car._id)
    return car
}

const getAllCarsForBranch = async (branch) => {
    const cars = await CarModel.find({ branch })
    return cars
}

const getAllCars = async () => {
    const cars = await CarModel.find({})
    return cars
}

const getRentedCars = async () => {
    const cars = await CarModel.find({})
    return cars.filter(car => car.car_rented_by !== 'null')
}


const getAvailableCars = async () => {
    const cars = await CarModel.find({ car_rented_by: 'null' })
    return cars
}



module.exports = {
    addNewCar,
    editCar,
    deleteCar,
    getAllCarsForBranch,
    getAllCars,
    getRentedCars,
    getAvailableCars
}