const express = require("express");
const pool = require("../db/pool");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ api: "ok", database: "ok" });
  } catch {
    console.error("Error en el Healthcheck:", error.message);
    res.status(500).json({ api: "ok", database: "error" });
  }
});

module.exports = router;
