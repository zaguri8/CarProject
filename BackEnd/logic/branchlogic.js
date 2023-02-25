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
    await BranchModel.findByIdAndDelete(branch._id)
    return car
}

const getBranches = async () => {
    const branches = await BranchModel.find({})
    return branches
}


module.exports = {
    addNewBranch,
    editBranch,
    deleteBranch,
    getBranches
}