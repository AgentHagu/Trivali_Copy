const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // are we supposed to choose a specific port?

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public/register.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});