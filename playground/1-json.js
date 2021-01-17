const fs = require('fs');
const databafer =fs.readFileSync('1-json.json')
const dataJson = databafer.toString()
const data = JSON.parse(dataJson)
console.log(data.name)