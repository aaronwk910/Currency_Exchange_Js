const express = require('express');
const router = express.Router();
const Rate = require('../models/rate');

//get one rate
router.get('/:id', getRate, (req, res) => {
    res.send(res.rate);
})

router.get('/:from/:to', async (req, res) => {
    try {
        const rate = await Rate.findOne({from: req.params.from, to: req.params.to})
        res.json(rate.multiplier)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//create one rate
router.post('/', async (req, res) => {
    const rate = new Rate({
        from: req.body.from,
        to: req.body.to,
        multiplier: req.body.multiplier
    })     
    try {
        const newRate = await rate.save()
        res.status(201).json(newRate)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


//update one
router.patch('/:id', getRate, async (req, res) => {
    if (req.body.from != null) {
        res.rate.from = req.body.from
    }
    if (req.body.to != null) {
        res.rate.to = req.body.to
    }
    if (req.body.multiplier != null) {
        res.rate.multiplier = req.body.multiplier
    }
    try {
        const updatedRate = res.rate.save()
        res.json(updatedRate)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//delete one
router.delete('/:id', getRate, (req, res) => {
    try{
        res.rate.remove()
        res.json({ message: 'Deleted rate'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getRate(req, res, next) {
    let rate
    try {
        rate = await Rate.findById(req.params.id)
        if (rate == null) {
            return res.status(404).json({ message: 'Cannot find rate'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.rate = rate
    next()
}

module.exports = router;