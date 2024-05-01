import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
const index = fs.readFileSync('index.html','utf-8');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(index);
  });

app.post("/submit", (req, res) => {
 console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
