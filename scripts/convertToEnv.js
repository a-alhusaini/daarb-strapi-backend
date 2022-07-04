let path = require("path");
let fs = require("fs");

let jayson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), process.argv[2]), "utf8")
);

let output = "";

jayson.forEach((envVar) => {
  let name = envVar.name.substr(
    envVar.name.lastIndexOf("/") + 1,
    envVar.name.length - 1
  );

  let value = envVar.value;

  output += `${name.toUpperCase()}=${value}\n`;
});

fs.writeFileSync(path.join(process.cwd(), ".env"), output);
