require('dotenv').config()
const express = require("express");
const authRoutes = require('./routes/auth')

const port = process.env.PORT;
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});