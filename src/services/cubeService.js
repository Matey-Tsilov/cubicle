const cubes = require("../db.json");
const fs = require("fs/promises");
const path = require("path");

exports.save = (cube) => {
  cube.objectId = cubes[cubes.length - 1].id + 1;
  cubes.push(cube);
  const textData = JSON.stringify(cubes, "", 4);
  return fs.writeFile(path.resolve("src", "db.json"), textData);
};

exports.getAll = (search = "", from = 0, to = 6) => {
  const result = cubes
  .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  .filter(c => Number(c.difficultyLevel) >= Number(from) && Number(c.difficultyLevel) <= Number(to));
    

  return result;
};
