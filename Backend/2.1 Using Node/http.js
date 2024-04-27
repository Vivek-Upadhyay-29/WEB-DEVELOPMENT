const http = require('http');

// const port = process.env.port;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.statusCode= 200;

    if(req.url == '/'){
        res.end('<h1> My name is Gopal Upadhyay viveks dad  </h1>');
    }

    else if(req.url == '/about'){
    res.end('<h1> This is about page by vivek </h1>');
}
else{
    res.statusCode = 404;
   res.end('<h1>Error is found brother!!!</h1>');
}

})  
server.listen(7080)