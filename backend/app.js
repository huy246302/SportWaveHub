const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import the database connection

const app = express();
const port = 3000;

app.use(bodyParser.json());

// API endpoint to fetch teams
app.get('/api/teams', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM team');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
