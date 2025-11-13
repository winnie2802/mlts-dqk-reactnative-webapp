const express = require("express");
const sql = require("mssql/msnodesqlv8");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // for parsing JSON body

const config = {
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server={DESKTOP-WINNIE\\SQLEXPRESS};Database={test};Trusted_Connection=Yes;"
};

// Route: GET all users
app.get("/users", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM users");
    res.json(result.recordset);
  } catch (err) {
    console.error("❌ SQL Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Route: POST to insert or login etc.
app.post("/login", async (req, res) => {
  const { phone } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("phoneNumber", sql.VarChar, phone)
      .query("SELECT * FROM users WHERE phoneNumber = @phoneNumber");

    if (result.recordset.length > 0) {
      res.json({ success: true, user: result.recordset[0] });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("❌ SQL Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
