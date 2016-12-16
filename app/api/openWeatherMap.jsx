const axios = require("axios");

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=";
const APP_ID = "a84f388dc2b6924badb0386440ee7643";
const UNIT = "&units=metric";
const URL = BASE_URL + APP_ID + UNIT;

const openWeatherMap = {

  getTemp: location => {
    const encodedLocation = encodeURIComponent(location);
    const requested_url = `${URL}&q=${encodedLocation}`;

    return axios.get(requested_url).then(res => {

      if (res.data.cod && res.data.message) {
        // if we get both something did not go that well
        throw new Error(res.data.message);

      } else {
        // the actual response
        return res.data.main.temp;
      }

    }, err => {
      throw new Error(err);
    });
  }

}

module.exports = openWeatherMap;
