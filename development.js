// creating a server without a framework

// const http= require('http')
// const port= 8300

// const server = http.createServer((req,res) => {
//         res.writeHead(200, {'content-type': 'text/html'})
//         let url = req.url;
//         if(url === '/about'){
//             res.end('<h1>WELCOME TO ABOUT US<h1>')
//         }
//         else if(url === '/contact'){
//             res.end('<h1>WELCOME TO CONTACT US<h1>')
//         }
//         else{
//             res.end('<h1>WELCOME BACK TO OUR WEBSITE')
//         }
// });

// server.listen(port, () =>{
//     console.log(`server listening on port ${port}`)
// })


// creating a server with a framework(express)

const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const app = express();
const port = 8300;


app.use(express.static('calculations'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + "/calculations/" + "circle.html");
});

app.post('/process-areaOfCircle', urlencodedParser, (req, res) => {
    let Area = Math.PI * Math.pow(req.body.num, 2);
    const result = (`Area of circle = ${Area}`);
    res.send(`${result}`);
});

app.post('/process-areaOfSquare', urlencodedParser, (req, res) => {
    let Area = parseFloat(req.body.len) * parseFloat(req.body.bre);
    const result = (`Area of square = ${Area}`);
    res.send(`${result}`);
});

const server = app.listen(port, () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log(`server listening on port ${address}:${port}`);
});