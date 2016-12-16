const React = require("react");

const WeatherForm = require("./WeatherForm");
const WeatherMessage = require("./WeatherMessage");
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
      temp: null
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
        isLoading: false
      });
    });
  },
  render: function() {
    const { isLoading, location, temp } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <p>Fetching weather...</p>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      } else if (!isLoading && !temp && location) {
        return <p>Unable to fetch weather on your location.</p>;
      }
    }
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onFormSubmit={this.handleFormSubmit}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
