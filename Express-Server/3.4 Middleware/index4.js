import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(morgan('tiny'));
app.use((req,res,next)=>{
  console.log("request method : " ,req.method);
  next();
})
app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit" ,(req,res)=>{
  console.log(req.body);
  res.send("<h1>Your band name is: </h1>" + `<p>${req.body.street}</p>`);
})

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
