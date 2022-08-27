const express = require('express');
const app = express();
const cors = require('cors');
const playerRouter = require('./controllers/playerRouter');
const summonerRouter = require('./controllers/summonerRouter');
const matchIdRouter = require('./controllers/matchIdRouter');
const historyRouter = require('./controllers/historyRouter');
const timelineRouter = require('./controllers/timelineRouter');

app.use(cors());
app.use(express.json());

app.use('/api/players', playerRouter);
app.use('/api/summoners', summonerRouter);
app.use('/api/matchId', matchIdRouter);
app.use('/api/history', historyRouter);
app.use('/api/timeline', timelineRouter);

app.get('/', async (request, response) => {
    
    response.set('Content-Type', 'text/html');
    response.send(Buffer.from('<h2>hello world</h2>'));
})

module.exports = app;