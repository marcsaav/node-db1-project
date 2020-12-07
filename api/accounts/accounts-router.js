const express = require('express')

const router = express.Router()

const Account = require('./accounts-model')

router.get('/', async (req, res) => {
    try {
        const data = await Account.getAll()
        res
            .status(200)
            .json(data)
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newAccount = await Account.create(req.body)
        res
            .status(200)
            .json(newAccount)
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const changes = req.body
        const updatedAccount = await Account.update(id, changes)
        res
            .status(200)
            .json(updatedAccount)
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Account.delete(id)
        res
            .status(200)
            .json({ message: `Account with id:${id} was successfully deleted. `})
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message })
    }
})

module.exports = router