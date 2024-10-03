require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT;
const express = require("express");
const authRoutes = require('./routes/auth')
const uploadRoutes = require('./routes/upload')

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get("/", (req, res) => {
  console.log("GET request received");
  res.json({ message: "Hello World!" });
});

app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes)

app.listen(port, () => { console.log(`Example app listening on port ${port}`)});