const CarCare = require("../models/CarCare");

const addNewCarCare = async (care) => {
    const newCare = new CarCare(care);
    return await newCare.save()
}

const editCare = async (carCare) => {
    await CarCare.findByIdAndUpdate(carCare._id, carCare)
    return carCare
}

const deleteCarCare = async (carCare) => {
    await CarCare.findByIdAndDelete(carCare)
    return carCare
}

const getAllCaresForCar = async (car) => {
    const rentals = await CarCare.find({ car_care_car: car })
    return rentals
}

const getAllCares = async () => {
    const cares = await CarCare.find({})
    return cares
}


const getAllCaresForBranch = async (branch) => {
    const rentals = await CarCare.find({ car_care_branch: branch })
        .populate("car")
        .populate("car_care_branch")
    return rentals
}
module.exports = {
    addNewCarCare,
    deleteCarCare,
    editCare,
    getAllCaresForCar,
    getAllCares,
    getAllCaresForBranch
}