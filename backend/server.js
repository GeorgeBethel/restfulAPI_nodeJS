const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

// lines of middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// inject the routes here
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))