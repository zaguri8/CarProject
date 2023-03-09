
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const ManagerModel = require('./models/Manager')
// .env file configuration
dotenv.config()

const validateToken = async (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) return res.status(401).send('Access Denied')

    try {
        token = token.split('Bearer ')[1]
        const verified = jwt.verify(token, process.env.SECRET)
        const user = await ManagerModel.findById(verified._id)
        req.user = user
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}

const generateToken = async (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.SECRET)
    return token
}

module.exports = {
    validateToken,
    generateToken
}