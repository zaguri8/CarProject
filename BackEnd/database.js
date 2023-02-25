const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const mongo_uri = process.env.MONGO_URI

mongoose.connect(mongo_uri, {
}, () => {
    console.log("Connected to Mongo db")
})

