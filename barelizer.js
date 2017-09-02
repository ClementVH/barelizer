const fs = require('fs');
let template = fs.readFileSync("./src/app/app.component.html", "utf8");
let style = fs.readFileSync("./src/app/app.component.scss", "utf8");

const tsstruct = require("ts-structure-parser")

let decls = fs.readFileSync("./src/app/app.component.ts").toString();
let struct = tsstruct.parseStruct(decls,{},"./src/app/app.component.ts");

let component = struct.classes[0];

let _properties = component.fields;
let _functions = component.methods;

let properties = {};

for (let property of _properties)
    properties[property.name] = property.valueConstraint.value;

let functions = {};

for (let _fun of _functions) {
    let text = _fun.text;
    text = text.substring(text.indexOf('{') + 1, text.lastIndexOf('}'));
    functions[_fun.name] = text;
}

let barel = {
    style: style,
    template: template,
    properties: properties,
    functions: functions
}

console.log(barel);

fs.writeFileSync('./barel.json', JSON.stringify(barel), 'utf-8');