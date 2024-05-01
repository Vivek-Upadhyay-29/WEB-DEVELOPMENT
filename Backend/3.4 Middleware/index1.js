import express from "express";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit",(req,res)=>{
  console.log(req.body);

});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
