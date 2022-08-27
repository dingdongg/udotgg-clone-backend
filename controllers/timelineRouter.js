const timelineRouter = require("express").Router();
require('dotenv');
const axios = require('axios');

timelineRouter.get('/:matchId', async (request, response) => {

    const searchByMatchUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/";

    const name = request.params.matchId;
    const url = `${searchByMatchUrl}${name}/timeline?api_key=${process.env.API_KEY}`;

    axios.get(url)
        .then(result => {
            response.status(200).json(result.data);
        })
        .catch(error => response.status(500).json({error: error}));

})

module.exports = timelineRouter;