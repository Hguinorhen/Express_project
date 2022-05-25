const express = require("express");
const { workTime } = require("./middlewares/workTime");
app = express();

const port = 3000;

app.get("/", workTime, (req, res, next) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/contact", workTime, (req, res, next) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/services", workTime, (req, res, next) => {
  res.sendFile(__dirname + "/public/services.html");
});

app.listen(port, (err) => {
  err ? console.error(err) : console.log(`go to localhost:${port}`);
});
