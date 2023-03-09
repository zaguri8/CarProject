const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
        required: false
    }
})


// Hash the plain text password before saving
ManagerScheme.pre('save', async function (next) {
    const manager = this
    if (manager.isModified('manager_password')) {
        manager.manager_password = await bcrypt.hash(manager.manager_password, 8)
    }
    next()
})


module.exports = mongoose.models.Manager || mongoose.model('Manager', ManagerScheme)