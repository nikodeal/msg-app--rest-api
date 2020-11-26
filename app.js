const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");
const messagesRoute = require("./routes/message-routes");
const cors = require('cors')
require("dotenv").config();
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use("/", messagesRoute);

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port);
    console.log(`Connected to Db and server on ${port}!`);
  })
  .catch((err) => {
    console.log(err);
  });
