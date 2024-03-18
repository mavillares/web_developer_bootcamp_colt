const fs = require("fs");
const folderName = process.argv[2] || "Project";
/*fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
  if (err) throw err;
});*/

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.js`);
  fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
  console.log("SOMENTHING WAS WRONG!");
  console.log(e);
}
