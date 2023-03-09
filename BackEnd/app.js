const express = require('express')
const app = express()
const database = require('./database')
const { loginManager } = require('./logic/managerlogic')
const { validateToken } = require('./middleware')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use("/branch", validateToken, require('./routes/branchRoute'))
app.use("/manager", validateToken, require('./routes/managerRoute'))
app.use("/customers", validateToken, require('./routes/customerRoute'))

app.use("/carRental", validateToken, require('./routes/carRentalRoute'))
app.use("/carCare", validateToken, require('./routes/carCareRoute'))
app.use("/cars", validateToken, require('./routes/carRoute'))


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await loginManager({ email, password })
        if (token) {
            res.status(200).send({ token })
        } else {
            res.status(401).send("Invalid email or password")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})



app.listen(5001, () => {
    console.log("Connected")
})
