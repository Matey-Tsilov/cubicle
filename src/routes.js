const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeCntroller')

const router = require('express').Router()

router.use('/', homeController)
router.use('/cube', cubeController)

module.exports = router