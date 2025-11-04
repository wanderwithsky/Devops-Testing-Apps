const mysql = require("mysql2");

// Create MySQL connection
const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "testdb"
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// Export the connection so server.js can use it
module.exports = db;
