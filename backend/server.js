const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.json"); // Import config file

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas using the connection string from config.json
mongoose.connect(config.connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use routes for expenses
app.use("/api/expenses", require("./routes/expenseroutes"));

// Add this route above your app.listen() in server.js

app.get("/", (req, res) => {
    res.send("Welcome to the Expense Tracker API");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});