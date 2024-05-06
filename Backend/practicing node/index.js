import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.sendFile(<p style= "display: flex;height: 50vh;width: 100vw;justify-content: center;align-items: center; background-color: red;border-radius: 2px solid black;">req.username </p>);
});

app.post("/check", (req, res) => {
  
  res.sendFile(__dirname + "practicing node\index.html");

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
