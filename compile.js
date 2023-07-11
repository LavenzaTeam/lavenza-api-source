const fs = require("fs");
const yaml = require("js-yaml");

let compileOption = process.argv.slice(2);
let filesToCompile = compileOption[0] || "all";

//compile p5r data to json
function compileP5RData() {
    let p5rData = JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./data/p5r.yml', 'utf8')), null, 2));
    try {
        fs.writeFileSync('./compile/p5r.json', p5rData);
    } catch (error) {
        console.error(error);
    }
}

//compile p4g data to json
function compileP4GData() {
    let p4gData = JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./data/p4g.yml', 'utf8')), null, 2));
    try {
        fs.writeFileSync('./compile/p4g.json', p4gData);
    } catch (error) {
        console.error(error);
    }
}

//compile p3re data to json
function compileP3REData() {
    let p3reData = JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./data/p3re.yml', 'utf8')), null, 2));
    try {
        fs.writeFileSync('./compile/p3re.json', p3reData);
    } catch (error) {
        console.error(error);
    }
}

switch (filesToCompile) {
    case "all":
        compileP3REData();
        compileP4GData();
        compileP5RData();
        break;
    case "p5r":
        compileP5RData();
        break;
    case "p4g":
        compileP4GData();
        break;
    case "p3re":
        compileP3REData();
        break;

    default:
        break;
}