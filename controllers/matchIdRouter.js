const matchIdRouter = require("express").Router();
require('dotenv');
const axios = require('axios');

matchIdRouter.get('/:puuid', async (request, response) => {

    const searchByPuuidUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/";

    const name = request.params.puuid;
    const url = `${searchByPuuidUrl}${name}/ids?api_key=${process.env.API_KEY}`;

    axios.get(url)
        .then(result => {
            response.status(200).json(result.data);
        })
        .catch(error => response.status(500).json({error: error}));
})

module.exports = matchIdRouter;