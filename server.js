const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
const studentRoutes = require("./routes/studentRoutes");
  app.use("/api", studentRoutes);


app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/studentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);  
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

  
});