const {
    addNewRental,
    editRental,
    deleteRental,
    getAllRentals,
    getAllCustomerRentals,
    getAllCustomerRentalsForBranch,
    getAllRentalsByCar
} = require('../logic/carRentalLogic')

const express = require('express'), router = express.Router()

// GET : /carCare/:id/
router.get('/:id', async (req, res) => {
    try {
        const cares = await getAllCustomerRentals(req.params.id)
        res.status(200).send(cares)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /carCare/byCar/:id/
router.get('/byCar/:id', async (req, res) => {
    try {
        const cares = await getAllRentalsByCar(req.params.id)
        res.status(200).send(cares)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /carCare/
router.get('/byBranch/:id', async (req, res) => {
    try {
        const branches = await getAllCustomerRentalsForBranch(req.params.id)
        res.status(200).send(branches)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// POST : /carRental/
router.post('/', async (req, res) => {
    try {
        const rental = await addNewRental(req.body)
        res.status(200).send(rental)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// PUT : /carRental/
router.put('/', async (req, res) => {
    try {
        const edittedRental = await editRental(req.body)
        res.status(200).send(edittedRental)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// DELETE : /carRental/
router.delete('/:id', async (req, res) => {
    try {
        const deletedCare = await deleteRental(req.params.id)
        res.status(200).send(deletedCare)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

