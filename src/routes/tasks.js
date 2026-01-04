const express = require("express");
const pool = require("../db/pool");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks");
  res.json(result.rows);
});

module.exports = router;
