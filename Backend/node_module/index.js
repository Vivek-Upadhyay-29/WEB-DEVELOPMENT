
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products;

const express = require('express');
const server = express();
server.get('/',(req, res)=>{
res.sendStatus(404);

})


server.listen(9090,()=>{
    console.log('serever started')
   
});

 

    // const server = http.createServer((req,res)=>{
    //     console.log("server started")
    //     res.setHeader('hello','dump value');
    //     // res.setHeader('Content-Type','text/html')
    //     // res.end(index);
    //     res.setHeader('Content-Type','application/json')
    //     res.end(data);
        
    // });
    // server.listen(8080)