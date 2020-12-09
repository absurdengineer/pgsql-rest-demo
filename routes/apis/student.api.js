const express = require('express')
const pool = require('../../databases/db')
const router = express.Router()

router.get('/',async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM students')
        res.status(200).send(result.rows)
    }catch(error) {
        console.error(`Error : ${error.message}`)
    }
})
router.get('/:id',async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const result = await pool.query(`SELECT * FROM students WHERE id=${id}`)
        if(result.rows === [])
            res.status(200).send(result.rows)
        else
            res.status(404).send("Invalid Id")
    }catch(error) {
        console.error(`Error : ${error.message}`)
    }
})

module.exports = router