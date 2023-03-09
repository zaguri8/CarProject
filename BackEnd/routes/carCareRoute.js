const {
    addNewCarCare,
    deleteCarCare,
    editCare,
    getAllCaresForCar,
    getAllCares,
    getAllCaresForBranch
} = require('../logic/carCareLogic')

const express = require('express'), router = express.Router()

// GET : /carCare/:id/
router.get('/:id', async (req, res) => {
    try {
        const cares = await getAllCaresForCar(req.params.id)
        res.status(200).send(cares)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /carCare/
router.get('/', async (req, res) => {
    try {
        const branches = await getAllCares()
        res.status(200).send(branches)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /carCare/
router.get('/byBranch/:id', async (req, res) => {
    try {
        const branches = await getAllCaresForBranch(req.params.id)
        res.status(200).send(branches)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// POST : /carCare/
router.post('/', async (req, res) => {
    try {
        const branches = await addNewCarCare(req.body)
        res.status(200).send(branches)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// PUT : /carCare/
router.put('/', async (req, res) => {
    try {
        const edittedCare = await editCare(req.body)
        res.status(200).send(edittedCare)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// DELETE : /carCare
router.delete('/:id', async (req, res) => {
    try {
        const deletedCare = await deleteCarCare(req.params.id)
        res.status(200).send(deletedCare)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

