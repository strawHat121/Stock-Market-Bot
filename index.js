require("dotenv").config();
const { default: axios } = require("axios");
const { TwitterClient } = require("twitter-api-client");

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

let data = {};

const options = {
  method: "GET",
  url: "https://nse-data1.p.rapidapi.com/all_indices",
  headers: {
    "X-RapidAPI-Host": "nse-data1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    data = response.data.body.data[0];
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
