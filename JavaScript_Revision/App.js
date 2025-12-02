// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }
// sayHi("Vijay");
// const os = require('os');

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// };

// console.log(currentOS);


// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8');
// console.log(first);

// writeFileSync(
//     './content/result.txt',
//     `here is the result: ${first}` 
// );

// const http = require('http');

// const server = http.createServer((req, res)=> {
//     res.write("Welcome on the home page");
//     res.end();
// });

// server.listen(5000);

// const {readFile} = require ('fs');

// readFile ('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })


// console.log("first");

// setTimeout(() => {
//     console.log("next");
// }, 0);
// console.log("second");

// setInterval(() => {
//     for(let i=0; i<100; i++){
//         console.log(i);
//     }
// }, 0);


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("Home page");
//     }
//     if(req.url === "/About"){
//         res.end("About Page");
//     }
//     res.end("Error page");
// })

// server.listen(5000, ()=> {
//     console.log('Server is listening on PORT 5000...');
// })

const http = require('http');

const server = http.createServer((req, res)=> {
    console.log("hit the server");
    res.end("Home page");
})
server.listen(5000);