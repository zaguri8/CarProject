

const mongoose = require('mongoose')

const BranchScheme = new mongoose.Schema({
    branch_number: {
        type: Number,
        required: true
    },
    branch_name: { // Herzeliya
        type: String,
        required: true
    },
    branch_manager: { // 125j12lk5n12lk -> Manager: moshe
        type: mongoose.Types.ObjectId,
        ref: 'Manager',
        required: true
    }
})

const BranchModel = mongoose.model("Branch", BranchScheme)

module.exports = BranchModel