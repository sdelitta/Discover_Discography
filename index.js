const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

app.get('/', (req, res) => {
    res.send("Discography Discovery search bar")
});

app.get('/artists', (req, res) => {
    res.send ('Artist search results page')
})

app.get('/albums', (req, res) => {
    res.send('Artist Albums Page')
})

app.get('/album-info', (req, res) => {
    res.send(`This will be album info ${req.params}`)
})


const token = 'ApVTbdGLctWwYaOGpOUpXfmBoAAVKIgsSgvklKHM'

app.post('/reviews', (req, res) => {
    res.send({comment: 'This is a review'})
})

app.get('/message/:id', (req, res) => {
    res.send({msg: `${request.query.name} is ${request.query.age} years old`})
})