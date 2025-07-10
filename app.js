// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware (optional)
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api', (req, res) => {
  res.send('Hello Chitranjan');
});
// Start server
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
