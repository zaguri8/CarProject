const CustomerModel = require("../models/Customer");

const addNewCustomer = async (customer) => {
    const newCustomer = new CustomerModel(customer);
    return await newCustomer.save()
}

const editCustomer = async (customer) => {
    await CustomerModel.findByIdAndUpdate(customer._id, customer)
    return customer
}

const deleteCustomer = async (customer) => {
    await CustomerModel.findByIdAndDelete(customer._id)
    return customer
}

const getAllCustomers = async () => {
    const customers = await CustomerModel.find({})
    return customers
}


module.exports = {
    addNewCustomer,
    editCustomer,
    deleteCustomer,
    getAllCustomers
}