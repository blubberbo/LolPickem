# LoL Pick'em

## A Pick'em style game for League of Legends fans

Users will be presented with a random LoL game matchup based on criteria they choose. Then, the user will guess which team they thought won, based solely on the team compositions.

Note: This app has been created using a development API Key for the [Riot API](https://developer.riotgames.com/) and is currently in alpha.

This is a fullstack application, consisting of a frontend app that calls a REST API (included in this project), which leverages the Riot API.

To view a hosted alpha demo of this app, please [click here](https://lol-pickem.netlify.com/).

Please note: if the hosted alpha does not work, it could be because the environment variable API Key in the REST API could have expired. If that is the case, I will need to update the value before the demo functions properly.

## Tech Stack

* the frontend was built using [Angular](https://angular.io/) and [Angular Material](https://material.angular.io/)
* the backend API was built using [LoopBack 4](https://loopback.io/doc/en/lb4/)

## Development

Use the following process to run the app in a local environment:

* enter a valid `LOL_API_KEY` environment variable for the server
* run `npm run dev` from the root directory to run both the server and client concurrently
