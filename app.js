
import express from "express";
const app = express();
app.use(express.static("public"));
import path from "path"


app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/home.html"));
})








const PORT = (8080);
app.listen(PORT)


