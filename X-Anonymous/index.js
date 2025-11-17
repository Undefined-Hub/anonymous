const express = require("express");
const fs = require("fs");
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(express.json());

// Very small CORS middleware to allow requests from anywhere
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // Respond to preflight requests quickly
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  var content = "";
  if (id == 1) {
    content = fs.readFileSync("../Problem_1/src/RegistrationForm.jsx", "utf8");
    res.send(content);
    return;
  } else if (id == 2) {
    content = fs.readFileSync("../Problem_2/src/App.jsx", "utf8");
    res.send(content);
    return;
  } else if (id == 3) {
    content = fs.readFileSync("../Problem_3/src/App.jsx", "utf8");
    content += "\n\n";
    content += fs.readFileSync("../Problem_3/src/index.css", "utf8");
    content += "\n\n";
    content += fs.readFileSync("../Problem_3/src/App.module.css", "utf8");
    res.send(content);
    return;
  } else if (id == 19) {
    content += "\n\n=== arithmeticModule.js ===\n";
    content += fs.readFileSync(`../Problem_19/arithmeticModule.js`, "utf8");
    content += "\n\n=== useModule.js ===\n";
    content += fs.readFileSync(`../Problem_19/useModule.js`, "utf8");
    res.send(content);
    return;
  } else if (id == 20 || id == 21 || id == 26) {
    content = fs.readFileSync(`../Problem_20_to_26/Problem_${id}.js`, "utf8");
    res.send(content);
    return;
  } else if (id >= 22 && id <= 24) {
    content = fs.readFileSync(`../Problem_20_to_26/Problem_22_to_24.js`, "utf8");
    res.send(content);
    return;
  } else if (id == 25) {
    content = fs.readFileSync(`../Problem_20_to_26/Problem_25.js`, "utf8");
    content += "\n\n=== userRoutes.js ===\n";
    content += fs.readFileSync(`../Problem_20_to_26/userRoutes.js`, "utf8");
    res.send(content);
    return;
  } else if (id == 27) {
    content = fs.readFileSync(`../Problem_20_to_26/Problem_27.js`, "utf8");
    res.send(content);
    return;
  }
  var content = fs.readFileSync(`../Problem_${id}.js`, "utf8");
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}..`);
});
