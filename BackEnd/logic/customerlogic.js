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
    await CustomerModel.findByIdAndDelete(customer)
    return customer
}

const getAllCustomers = async () => {
    const customers = await CustomerModel.find({})
    return customers
}

const getAllCustomersForBranch = async (branch) => {
    const customers = await CustomerModel.find({ branch })
    return customers
}

module.exports = {
    addNewCustomer,
    editCustomer,
    deleteCustomer,
    getAllCustomersForBranch,
    getAllCustomers
}