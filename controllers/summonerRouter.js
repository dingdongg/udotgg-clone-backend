const summonerRouter = require('express').Router();
require('dotenv');
const axios = require('axios');

summonerRouter.get('/:id', async (request, response) => {

    const searchByIdUrl = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/';

    const id = request.params.id;
    const url = `${searchByIdUrl}${id}?api_key=${process.env.API_KEY}`;

    axios.get(url)
        .then(result => {
            response.status(200).json(result.data);
        })
        .catch(error => response.status(500).json({ error: error }));
})

module.exports = summonerRouter;