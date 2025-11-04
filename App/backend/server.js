const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import connection from db.js

const app = express();
app.use(cors());

// Routes for three apps
app.get("/home", (req, res) => {
  db.query("SELECT * FROM home", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});

app.get("/about", (req, res) => {
  db.query("SELECT * FROM about", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});

app.get("/services", (req, res) => {
  db.query("SELECT * FROM services", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
