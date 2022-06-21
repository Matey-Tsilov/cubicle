const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const router = require('express').Router()

router.use('/', homeController)
router.use('/cube', cubeController)

module.exports = router