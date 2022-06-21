const { save } = require('../services/cubeService')
const router = require('express').Router()
const cubes = require('../db.json')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', async (req, res) => {
    const cube = req.body

    //Validate
    if (cube.name.length < 2) {
        return res.status(400).send("Cube's name is too short!")
    }

    //Save Data
try {
    await save(cube)
    
     //Redirect
     res.redirect('/')
} catch (error) {
    res.status(400).send(error)
}
   
})

router.get('/details/:id', (req, res) => {
    res.render('details', cubes[req.params.id])
})

module.exports = router