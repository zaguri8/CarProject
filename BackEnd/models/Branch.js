

const mongoose = require('mongoose')

const BranchScheme = new mongoose.Schema({
    branch_number: {
        type: Number,
        required: true
    },
    branch_name: {
        type: String,
        required: true
    },
    branch_manager: {
        type: mongoose.Types.ObjectId,
        ref: 'Manager',
        required: true
    }
})

module.exports = mongoose.models.Branch || mongoose.model("Branch", BranchScheme)