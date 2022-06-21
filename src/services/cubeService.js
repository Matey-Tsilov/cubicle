const cubes = require('../db.json')
const fs = require('fs/promises')
const path = require('path')

exports.save = (cube) => {
    cube.objectId = (cubes[cubes.length - 1]).id + 1
    cubes.push(cube)
    const textData = JSON.stringify(cubes, '', 4)
    return fs.writeFile(path.resolve('src', 'db.json'), textData)
}