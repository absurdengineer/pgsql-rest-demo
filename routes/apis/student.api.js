const express = require('express')
const pool = require('../../databases/db')
const router = express.Router()

router.get('/',async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM students')
        res.status(200).send(result.rows)
        pool.end()
    }catch(error) {
        console.error(`Error : ${error.message}`)
    }
})

module.exports = router