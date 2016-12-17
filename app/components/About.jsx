const React = require("react");

// const About = React.createClass({
//   render: function() {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

const About = props => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Basic Weather App built entirely in Javascript with React and Webpack for the front end, Node.js and Express for the back end.</p>
      <p>Layout by Foundation, styling by custom CSS.</p>
      <p>Resources:</p>
      <ul>
        <li><a href="#">ReactJS</a></li>
        <li><a href="#">Webpack</a></li>
        <li><a href="#">Node.js</a></li>
        <li><a href="#">Express</a></li>
      </ul>
      <p>Weather data by city provided by <a href="#">OpenWeatherMap.org</a>.</p>
    </div>
  );
}

module.exports = About;
