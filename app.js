
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

app.get("/week3", (req, res) =>{
    res.sendFile(path.resolve("public/week3.html"));
})
app.get("/week4", (req, res) =>{
    res.sendFile(path.resolve("public/week4.html"));
})
app.get("/week5", (req, res) =>{
    res.sendFile(path.resolve("public/week5.html"));
})


const PORT = (8080);
app.listen(PORT)


