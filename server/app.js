const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../client")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`abc ${PORT}`));
