const express = require("express")
const db = require('./db')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))      

app.use('/api', routes)
   
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))