require("dotenv").config();
const cookieParser = require("cookie-parser");
// const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const dbConfig = require("./Config/config.js");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// app.use(fileUpload())
app.use(cors());
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
app.use(cors());
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const authRoutes = require("./Route/route");
app.use(bodyParser.json());
app.use("/api/", authRoutes);
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});