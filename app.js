import express from "express";
import path from "path";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy check for username and password
  if(username === 'oscar' && password === 'storm') {
    return res.redirect('/home.html');
  }
  
  return res.status(401).send('Invalid login credentials');
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/login.html"));
});

app.get("/home", (req, res) =>{
  res.sendFile(path.resolve("public/home.html"));
})

app.get("/week1", (req, res) => {
  res.sendFile(path.resolve("public/week1.html"));
});

app.get("/week2", (req, res) => {
  res.sendFile(path.resolve("public/week2.html"));
});

app.get("/week3", (req, res) => {
  res.sendFile(path.resolve("public/week3.html"));
});
app.get("/week4", (req, res) => {
  res.sendFile(path.resolve("public/week4.html"));
});
app.get("/week5", (req, res) => {
  res.sendFile(path.resolve("public/week5.html"));
});

const PORT = 8080;
app.listen(PORT);
