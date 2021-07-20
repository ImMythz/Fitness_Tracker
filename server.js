const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index.js")

const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
