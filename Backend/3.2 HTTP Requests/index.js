// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
import fs from "fs";
import express from "express";
const app = express();
const port = 3000;

const index = fs.readFileSync('index.html','utf-8');

app.get("/",(req,res)=>{
  console.log("server started");
res.send("<h1> MY name is vivek </h1>");
res.end("<h2>Chala ja bewakoof</h2>");
});
app.get("/about",(req,res)=>{
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});
app.get("/info", (req,res)=>{

    //  res.setHeader('hello','dump value');
    //  res.setHeader('Content-Type','text/html')
     res.end(index);
});

app.get("/lol",(req,res)=>{
 
res.sendStatus(404);

});
app.listen(port, ()=>{
  console.log(`server started at ${port}`);
});
