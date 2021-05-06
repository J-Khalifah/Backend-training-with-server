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

var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();
const port= 8300;


app.use(express.static('calculations'));

    app.get('/', (req,res)=>{
        res.sendFile( __dirname + "/" + "index.html" );
    });
    
    app.get('/circle',(req,res)=>{
         res.sendFile( __dirname + "/calculations/" + "circle.html" );
    });

    app.post('/process-areaOfCircle',urlencodedParser,(req,res)=>{
        let Area = Math.PI * Math.pow(num,2);
        let Area2 = Math.round(Area);
        var result = parseFloat(req.body.Area.num) * parseFloat(Area2)
        res.send(`${result}`);
    });

var server = app.listen(port,()=>{
    var address = server.address().address;
    var port = server.address().port;
    console.log(`server listening on port ${address}:${port}`);
});