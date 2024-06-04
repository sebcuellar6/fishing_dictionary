const { Tactics } = require('../models')

const getAllTactics = async (req, res) => {
    try {
        const objectArray = await Tactics.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTacticsById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Tactics.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Tactic doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Tactic doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createTactics = async (req, res) => {
    try {
        const newObject = await new Tactics(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Tactic doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

const updateTactics = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Tactics.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Tactic not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Tactic doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const deleteTactics = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Tactics.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Tactic deleted");
        }
        throw new Error("Tactic not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Tactic doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTactics,
    getTacticsById,
    createTactics,
    updateTactics,
    deleteTactics
}