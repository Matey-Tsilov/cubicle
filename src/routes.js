const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeCntroller')

const router = require('express').Router()

router.get('/', homeController.index)
router.get('/about', homeController.about)

router.use('/cube', cubeController)

module.exports = router