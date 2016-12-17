const React = require("react");

const WeatherForm = require("./WeatherForm");
const WeatherMessage = require("./WeatherMessage");
const ErrorModal = require("./ErrorModal");
const openWeatherMap = require("../api/openWeatherMap");

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleFormSubmit: function(location) {
    this.setState({
      isLoading: true,
      temp: null,
      errorMessage: null
    });
    openWeatherMap.getTemp(location).then(temp => {
      this.setState({
        isLoading: false,
        location,
        temp
      });
    }, err => {
      console.log(err);
      this.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function() {
    const { isLoading, location, temp, errorMessage } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <p>Fetching weather...</p>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      } else if (!isLoading && !temp && location) {
        return <p>Unable to fetch weather on your location.</p>;
      }
    }
    function renderError() {
      if (typeof errorMessage === "string") {
        return <ErrorModal
          title="Sorry, pal!"
          message={errorMessage}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onFormSubmit={this.handleFormSubmit}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
