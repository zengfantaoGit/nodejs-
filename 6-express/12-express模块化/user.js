const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user index')
})

router.post('/', (req, res) => {
    res.send('user post')
})

router.all('*', (req, res) => {
    res.json({
        code: 404,
        msg: "path Not Find!!!",
        data: {}
    })
})

module.exports = router

