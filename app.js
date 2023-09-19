
import express from "express";
const app = express();
app.use(express.static("public"));
import path from "path"


app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/home.html"));
})

app.get("/week1", (req, res) =>{
    res.sendFile(path.resolve("public/week1.html"));
})

app.get("/week2", (req, res) =>{
    res.sendFile(path.resolve("public/week2.html"));
})







const PORT = (8080);
app.listen(PORT)


