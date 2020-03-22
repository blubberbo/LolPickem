# LoL Pick'em

## A Pick'em style game for League of Legends fans

Users will be presented with a random LoL game matchup based on criteria they choose. Then, the user will guess which team they thought won, based solely on the team compositions.

Note: This app has been created using a development API Key for the [Riot API](https://developer.riotgames.com/) and is currently in alpha.

This is a fullstack application, consisting of a frontend app that calls a REST API (included in this project), which leverages the Riot API.

To view a hosted alpha demo of this app, please [click here](https://lolpickem.netlify.com/).

Please note: the alpha app requires the RIOT API Key, which has rate limits. If you encounter the 429 error, please follow the instructions, wait up to 2 minutes and refresh the app.

## Authentication

This app requires authentication, which I handle using [Auth0](https://auth0.com/). I allow for users to either create a local account just with my app on Auth0 or to sign in using Google. The reason I require this is because my data is being retrieved from the Riot API using a developer API Key they provided to me that has limitations. I need to be sure that the traffic being driven to them is authenticated and deliberate.

**I will never distribute, sell, modify or otherwise exploit any personal data from this apps authentication.**

## Tech Stack

- the frontend was built using [Angular](https://angular.io/) and [Angular Material](https://material.angular.io/)
- the backend API was built using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/)

## Development

Use the following process to run the app in a local environment:

- enter a valid `LOL_API_KEY` environment variable for the server
- run `npm start` from the root directory to run both the server and client concurrently
