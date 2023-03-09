

const express = require('express'), router = express.Router()
const {
    addNewCustomer,
    editCustomer,
    deleteCustomer,
    getAllCustomers,
    getAllCustomersForBranch
} = require('../logic/customerlogic')

// GET : /customers/
router.get('/', async (req, res) => {
    try {
        const cars = await getAllCustomers()
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /customers/byBranch
router.get('/byBranch/:id', async (req, res) => {
    try {
        const cars = await getAllCustomersForBranch(req.params.id)
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// POST : /customers/
router.post('/', async (req, res) => {
    try {
        const newCustomer = await addNewCustomer(req.body)
        res.status(200).send(newCustomer)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// PUT : /customers/
router.put('/', async (req, res) => {
    try {
        const editedCustomer = await editCustomer(req.body)
        res.status(200).send(editedCustomer)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// DELETE : /customers/
router.delete('/:id', async (req, res) => {
    try {
        const deletedCustomer = await deleteCustomer(req.params.id)
        res.status(200).send(deletedCustomer)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

