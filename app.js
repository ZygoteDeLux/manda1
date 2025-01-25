import express from "express";
import path from "path";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public/"));
// Set EJS as the view engine
app.set("view engine", "ejs");
// Set the views directory
app.set("views", "./views");

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/login.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.resolve("public/home.html"));
});

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

//SSR using ejs
app.get("/week5", (req, res) => {
  res.render(path.resolve("views/week5.ejs"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy check for username and password
  if (username === "oscar" && password === "storm") {
    return res.redirect("/home.html");
  }
  return res.status(401).send("Invalid login credentials");
});


app.listen(PORT);

export default app;