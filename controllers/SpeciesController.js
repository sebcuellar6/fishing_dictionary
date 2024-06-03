const { Species } = require('../models')

const getAllSpecies = async (req, res) => {
    try {
        const objectArray = await Species.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSpeciesById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Species.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Bicycle doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createSpecies = async (req, res) => {
    try {
        const newObject = await new Species(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Bicycle doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

const updateSpecies = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Species.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Bicycle not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const deleteSpecies = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Species.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Bicycle deleted");
        }
        throw new Error("Bicycle not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllSpecies,
    getSpeciesById,
    createSpecies,
    updateSpecies,
    deleteSpecies
}