
const {
    addNewManager,
    editManager,
    deleteManager,
    getAllManagersByBranch,
    getAllManagers,
} = require('../logic/managerlogic');


const express = require('express'), router = express.Router();

// GET : /manager/
router.get('/', async (req, res) => {
    try {
        const managers = await getAllManagers();
        res.status(200).send(managers);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/get', async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// GET : /manager/:id/ (Branch id)
router.get('/:id', async (req, res) => {
    try {
        const managers = await getAllManagersByBranch(req.params.id);
        res.status(200).send(managers);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// POST : /manager/
router.post('/', async (req, res) => {
    try {
        const newManager = await addNewManager(req.body);
        res.status(200).send(newManager);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// PUT : /manager/
router.put('/', async (req, res) => {
    try {
        const editedManager = await editManager(req.body);
        res.status(200).send(editedManager);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// DELETE : /manager/
router.delete('/:id', async (req, res) => {
    try {
        const deletedManager = await deleteManager(req.params.id);
        res.status(200).send(deletedManager);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;
