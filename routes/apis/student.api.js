const express = require('express')
const pool = require('../../databases/db')
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).send("Hello")
})

module.exports = router