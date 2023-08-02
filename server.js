const express = require("express");
const connectDB = require("./config/dbConnect");
const app = express();
const cors = require("cors");

require("dotenv").config(); 

// connect to DB

connectDB();
app.use(cors())

// Routes

app.use(express.json());

app.use("/user", require("./routes/user"))
app.use("/doctor", require("./routes/doctor"));
app.use("/avis", require("./routes/avis"));
app.use("/magazine", require("./routes/magazine"));
// server
const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(` server is running on ${PORT}` )
);
