const mongoose = require('mongoose')

const dotenv = require('dotenv')
const { populate } = require('./prepopulate')
dotenv.config()

const mongo_uri = process.env.MONGO_URI

mongoose.connect(mongo_uri, {
}, async () => {
    console.log("Connected to Mongo db")
    await populate();
    console.log("Populated")
})

