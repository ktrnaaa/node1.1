// console.log("ggg");
// const moment = require('moment');
// const path = require('path');

// const newTxt = require('./textfile.txt');

// const str = moment().format("MMM Do YY");
// console.log(str);

// const str2 = path.join('./hhh/333', '../ghh')
// console.log(str2)

// console.log(newTxt)

// ////////////////////////////////////////////////

const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {

    console.log('request');
    console.log(req.url);


    if (req.url === '/'){
        res.end('HOME PAGE')
    } else if (req.url === '/img'){
        res.end(fs.readFileSync('./img/cat.png'))
    } else if (req.url === '/catalogue'){
        res.end('This is the catalogue')
    } else {
        res.end('404')
    }
});

server.listen(3000);
console.log('RUN');