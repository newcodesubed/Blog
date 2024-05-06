import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import ejs from "ejs"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port= 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(join(__dirname, 'static')));




// app.get ("/",(req,res)=>{
//     res.sendFile(__dirname + "/static/index.html");
// })
app.get("/", (req, res) => {
    res.sendFile(join(__dirname,  "index.html"))});

app.get ("/about",(req,res)=>{
    res.send("<h1>first page</h1>")
});

app.listen(port, () =>{
    console.log(`server running in port ${port}`);
});