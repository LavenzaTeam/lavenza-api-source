const fs = require("fs");
const yaml = require("js-yaml");

//compile p5r data to json
let p5rData = JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./data/p5r.yml', 'utf8')), null, 2));
try {
    fs.writeFileSync('./compile/p5r.json', p5rData);
} catch (e) {
    console.error(e);
}

//compile p4g data to json

//compile p3re data to json