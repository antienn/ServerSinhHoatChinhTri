const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const managercarsRoute = require("./src/routes/managercmt")

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: "https://giaiphongmiennam30-4.vercel.app"
  }));

app.use(express.json({limit: "50mb"}));
mongoose.set('strictQuery', true);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log(err);
    });
app.use("/managercmt",managercarsRoute);
app.listen(port);