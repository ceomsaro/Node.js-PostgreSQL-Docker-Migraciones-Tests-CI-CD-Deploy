const express = require("express");
const pool = require("../db/pool");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks");
  res.json(result.rows);
});

// Definimos la ruta POST
router.post('/', async (req, res) => {
  const { title } = req.body;

  try {
    // Usamos pool.query directamente
    const result = await pool.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
      [title]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error en la base de datos:', err);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

module.exports = router;
