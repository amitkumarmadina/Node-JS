const fs = require('fs');

// fs.readFile("file.txt", "utf8", (err,data) =>{
// console.log(err, data)
// });

// const a = fs.readFileSync('file.txt');
// console.log(a);

// fs.writeFile('file.txt', 'This is demo new Data',() => {
//     console.log("file is written");
// });

const b = fs.writeFileSync('file.txt', "this is a new data");
console.log("finished");