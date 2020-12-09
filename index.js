const express = require('express')
const morgan = require('morgan')
const pool = require('./databases/db')
const student = require('./routes/apis/student.api')

//* Application
const app = express()

//* Middlewares
app.use(morgan('dev'))

//* Settings
const PORT = (process.env.PORT || 3000)

//* Routers
app.use("/api/students/",student)

//* App Listener
app.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT} ...`)
    console.log(`Server Started http://127.0.0.1:${PORT}/`)
})