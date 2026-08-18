import express from 'express';
const express = require('express');
const app = express();
const PORT = 3000;

// Sinun oma valmis aikafunktiosi
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return now.toLocaleString('fi-FI', options);
}

app.get('/api/aika', (req, res) => {
  res.json({ aika: getCurrentDateTime() });
});

app.listen(PORT, () => {
  console.log(`Backend-palvelin käynnissä portissa http://localhost:${PORT}`);
});