const express = require('express');
const app = express();
const cors = require('cors');
const playerRouter = require('./controllers/playerRouter');

app.use(cors());
app.use(express.json());

app.use('/api/players', playerRouter);

module.exports = app;