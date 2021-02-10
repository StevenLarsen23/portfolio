require("dotenv").config();

const express = require("express");

const path = require('path')

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/../build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () =>
  console.log(`Server is running on port: ${SERVER_PORT}`)
);
