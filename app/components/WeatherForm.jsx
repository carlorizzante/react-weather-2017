const React = require("react");

const WeatherForm = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    const location = this.refs.location.value;
    if (typeof location === "string" && location.length > 0) {
      // console.log(location);
      this.refs.location.value = "";
      this.props.onFormSubmit(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" placeholder="Enter city name..."/>
        <button className="hollow button expanded">Get Weather!</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
