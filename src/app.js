require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Routes = require("./routes/Routes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", Routes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
