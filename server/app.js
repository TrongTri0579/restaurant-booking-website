const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookingRoutes");
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);

app.use("/api", bookingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
