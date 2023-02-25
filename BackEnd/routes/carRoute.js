const { getBranches, editBranch, deleteBranch } = require('../logic/branchlogic')
const { getAllCars, getAllCarsForBranch, addNewCar, editCar, deleteCar } = require('../logic/carlogic')

const express = require('express'), router = express.Router()

// GET : /cars/
router.get('/', async (req, res) => {
    try {
        const cars = await getAllCars()
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /cars/byBranch
router.get('/byBranch/:id', async (req, res) => {
    try {
        const cars = await getAllCarsForBranch(req.params.id)
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// GET : /cars/rented
router.get('/rented', async (req, res) => { 
    try {
        const cars = await getRentedCars()
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// GET : /cars/available
router.get('/available', async (req, res) => {
    try {
        const cars = await getAvailableCars()
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// POST : /cars/
router.post('/', async (req, res) => {
    try {
        const newCar = await addNewCar(req.body)
        res.status(200).send(newCar)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// PUT : /cars/
router.put('/', async (req, res) => {
    try {
        const editedCar = await editCar(req.body)
        res.status(200).send(editedCar)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// DELETE : /cars/
router.delete('/', async (req, res) => {
    try {
        const deletedCar = await deleteCar(req.body)
        res.status(200).send(deletedCar)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

