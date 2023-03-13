

import http from './'


const getBranch = async (branchId) => {
    const response = await http.get(`/branch/byId/${branchId}`)
    return response.data
}

const loginManager = async (manager) => { // email, password
    const response = await http.post('/login', manager)
    // save token
    if (response.data) {
        localStorage.setItem('token', response.data.token)
    }
    return response.data
}

const getManager = async () => {
    const response = await http.get(`/manager/get`)
    return response.data
}

const addNewManager = async (manager) => {
    const response = await http.post('/manager', manager)
    return response.data
}

const editManager = async (manager) => {
    const response = await http.put('/manager', manager)
    return response.data
}

const deleteManager = async (manager) => {
    const response = await http.delete(`/manager/${manager._id}`)
    return response.data
}

const getAllManagersByBranch = async (branch) => {
    const response = await http.get(`/manager/${branch}`)
    return response.data

}


const getAllManagers = async () => {
    const response = await http.get('/manager')
    return response.data

}

const addNewCar = async (car) => {
    const response = await http.post('/car', car)
    return response.data

}

const editCar = async (car) => {
    const response = await http.put('/cars', car)
    return response.data

}

const deleteCar = async (car) => {
    const response = await http.delete(`/cars/${car._id}`)
    return response.data

}

const getAllCarsForBranch = async (branch) => {
    const response = await http.get(`/cars/byBranch/${branch}`)
    return response.data
}

const getAllCars = async () => {
    const response = await http.get('/cars')
    return response.data
}


const addNewBranch = async (branch) => {
    const response = await http.post('/branch', branch)
    return response.data
}

const editBranch = async (branch) => {
    const response = await http.put('/branch', branch)
    return response.data
}

const deleteBranch = async (branch) => {
    const response = await http.delete(`/branch/${branch._id}`)
    return response.data
}

const getAllBranches = async () => {
    const response = await http.get('/branch')
    return response.data
}

const addCarRental = async (rental) => {
    const response = await http.post('/carRental', rental)
    return response.data
}

const editCarRental = async (rental) => {
    const response = await http.put('/carRental', rental)
    return response.data
}

const deleteCarRental = async (rental) => {
    const response = await http.delete(`/carRental/${rental._id}`)
    return response.data
}

const getAllCarRentals = async () => {
    const response = await http.get('/carRental')
    return response.data
}

const getAllCarRentalsByBranch = async (branch) => {
    const response = await http.get(`/carRental/${branch}`)
    return response.data
}

const getAllCaresByCar = async (car) => {
    const response = await http.get(`/carCare/byCar/${car}`)
    return response.data
}

const getAllCaresByCustomer = async (customer) => {
    const response = await http.get(`/carCare/${customer}`)
    return response.data
}



const addCarCare = async (care) => {
    const response = await http.post('/carCare', care)
    return response.data
}

const editCarCare = async (care) => {
    const response = await http.put('/carCare', care)
    return response.data
}

const deleteCarCare = async (care) => {
    const response = await http.delete(`/carCare/${care._id}`)
    return response.data
}

const getAllCarCares = async () => {
    const response = await http.get('/carCare')
    return response.data
}

const getAllCarCaresByBranch = async (branch) => {
    const response = await http.get(`/carCare/${branch}`)
    return response.data
}

const getAllCustomersByBranch = async (branch) => {
    const response = await http.get(`/customers/byBranch/${branch._id}`)
    return response.data
}

const getAllCustomers = async () => {
    const response = await http.get('/customers')
    return response.data
}



export {
    loginManager,
    getManager,
    addNewManager,
    editManager,
    deleteManager,
    getAllManagersByBranch,
    getAllManagers,
    getAllBranches,
    getAllCustomers,
    addNewCar,
    editCar,
    deleteCar,
    getAllCustomersByBranch,
    getAllCarsForBranch,
    getBranch,
    getAllCars,
    addNewBranch,
    editBranch,
    deleteBranch,
    addCarRental,
    editCarRental,
    deleteCarRental,
    getAllCarRentals,
    getAllCarRentalsByBranch,
    addCarCare,
    editCarCare,
    deleteCarCare,
    getAllCarCares,
    getAllCaresByCar,
    getAllCarCaresByBranch,
    getAllCaresByCustomer
}
