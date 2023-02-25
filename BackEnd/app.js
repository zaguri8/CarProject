const express = require('express')
const app = express()
const database = require('./database')

app.use("/branch", require('./routes/branchRoute'))
app.use("/cars", require('./routes/carRoute'))

app.listen(5001, () => {
    console.log("Connected")
})
