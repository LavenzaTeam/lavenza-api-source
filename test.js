const fs = require('fs');
const yaml = require('js-yaml');

let p5rData = JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./data/p5r.yml', 'utf8')), null, 2));
console.log(p5rData.persona.arsene);

