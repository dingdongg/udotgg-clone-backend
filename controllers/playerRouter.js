const playerRouter = require('express').Router();
require('dotenv');
const axios = require('axios');

playerRouter.get('/:name', async (request, response) => {

    const searchByNameUrl = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

    const name = request.params.name;
    const url = `${searchByNameUrl}${name}?api_key=${process.env.API_KEY}`;

    axios.get(url)
        .then(result => {
            response.status(200).json(result.data);
        })
        .catch(error => console.log(error));
})

module.exports = playerRouter;