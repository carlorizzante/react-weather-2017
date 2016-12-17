const React = require("react");

// const WeatherMessage = React.createClass({
//   render: function() {
//     const { location, temp } = this.props;
//     return (
//       <p>It is freaking {temp} degrees in {location}.</p>
//     );
//   }
// });

const WeatherMessage = ({ location, temp }) => {
  return (
    <h3>It is freaking {temp} degrees in {location}</h3>
  );
}

module.exports = WeatherMessage;
