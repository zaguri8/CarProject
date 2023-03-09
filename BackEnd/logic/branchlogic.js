const BranchModel = require("../models/Branch");

const addNewBranch = async (branch) => {
    const newBranch = new BranchModel(branch);
    return await newBranch.save()
}

const editBranch = async (branch) => {
    await BranchModel.findByIdAndUpdate(branch._id, branch)
    return branch
}

const deleteBranch = async (branch) => {
    await BranchModel.findByIdAndDelete(branch)
    return car
}

const getBranches = async () => {
    const branches = await BranchModel.find({})
        .populate("branch_manager")
    return branches
}

const getBranch = async (id) => {
    const branch = await BranchModel.findById(id)
        .populate("branch_manager")
    return branch
}


module.exports = {
    addNewBranch,
    getBranch,
    editBranch,
    deleteBranch,
    getBranches
}