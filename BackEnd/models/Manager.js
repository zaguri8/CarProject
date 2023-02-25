const mongoose = require('mongoose')

const ManagerScheme = new mongoose.Schema({
    manager_email: {
        type: String,
        required: true
    },
    manager_password: {
        type: String,
        required: true
    },
    manager_passport_id: {
        type: String,
        required: true
    },
    manager_name: {
        type: String,
        required: true
    },
    manager_protection_level: {
        type: String,
        required: true
    },
    manager_branch: {
        type: mongoose.Types.ObjectId,
        ref: "Branch",
        required: true
    }
})

const ManagerModel = mongoose.model('Manager', ManagerScheme)


module.exports = ManagerModel