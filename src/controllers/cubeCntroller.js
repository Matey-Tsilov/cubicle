const router = require('express').Router()
const cubes = require('../db.json')
const fs = require('fs/promises')
const path = require('path')


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
    cubes.push(cube)
    await fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4))

    //Redirect
    res.redirect('/')
})

module.exports = router