const express = require('express')
const port = 4000
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the workshop!')
})

app.listen(port, console.log(`App is listening on port ${port} ...`));