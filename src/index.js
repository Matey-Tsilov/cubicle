const express = require('express')
const port = 4000
const handlebars = require('express-handlebars')
const routes = require('./routes')

const app = express()

app.use('/static', express.static('public'))

app.use(express.urlencoded({extended: false}))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(routes)

app.listen(port, console.log(`App is listening on port ${port} ...`));