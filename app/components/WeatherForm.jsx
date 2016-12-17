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
        <input type="search" ref="location" placeholder="Search weather by city..."/>
        <button className="hollow button expanded">Get Weather!</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
