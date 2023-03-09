
const Manager = require('../models/manager');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware');

const loginManager = async (manager) => {
    const managerToLogin = await Manager.findOne({ manager_email: manager.email, })
    const isPasswordMatch = await bcrypt.compare(manager.password, managerToLogin.manager_password)
    if (!isPasswordMatch) {
        throw new Error('Wrong password')
    }
    const token = await generateToken(managerToLogin)
    return token
}

const getManager = async (id) => {
    const manager = await Manager.findById(id)
    return manager
}

const addNewManager = async (manager) => {
    const newManager = new Manager(manager);
    return await newManager.save()
}

const editManager = async (manager) => {
    const managerToEdit = await Manager.findByIdAndUpdate(manager._id, manager);
    return managerToEdit;
}

const deleteManager = async (manager) => {
    await Manager.findByIdAndDelete(manager)
    return manager
}

const getAllManagersByBranch = async (branch) => {
    const managers = await Manager.find({ manager_branch: branch })
    return managers
}

const getAllManagers = async () => {
    const managers = await Manager.find({})
    return managers
}

module.exports = {
    addNewManager,
    editManager,
    deleteManager,
    getAllManagersByBranch,
    getAllManagers,
    loginManager,
    getManager
}