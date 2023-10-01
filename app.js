import express from "express";
import path from "path";
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
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
app.get("/week5", (req, res) => {
  res.sendFile(path.resolve("public/week5.html"));
});

const obj1 = {
  name: "Oscar",
  age: 29,
  height: 188
}

function myFunction(){
  console.log(obj1);
}

const myFunction2 = () => {
  console.log(obj1.height);

  let x = 5;
  let y = 10;
  let z = String(x) + y;
  console.log(z)
}

myFunction();

const myList = [1, 2, 3, "hej", obj1];

console.log(myList[4].age);

myFunction2();

const PORT = 8080;
app.listen(PORT);
