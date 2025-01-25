import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath for path conversion

const app = express();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Ensure correct path to 'public'

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/login.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/home.html"));
});

app.get("/week1", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/week1.html"));
});

app.get("/week2", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/week2.html"));
});

app.get("/week3", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/week3.html"));
});

app.get("/week4", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/week4.html"));
});

// SSR using ejs
app.get("/week5", (req, res) => {
  res.render(path.resolve(__dirname, "views/week5.ejs"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy check for username and password
  if (username === "oscar" && password === "storm") {
    return res.redirect("/home.html");
  }
  return res.status(401).send("Invalid login credentials");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
