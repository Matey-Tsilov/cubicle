const express = require('express')
const port = 4000
const app = express()
const handlebars = require('express-handlebars')

app.use('/static', express.static('public'))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, console.log(`App is listening on port ${port} ...`));