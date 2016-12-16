const React = require("react");

const { Link, IndexLink } = require("react-router");

// const Nav = React.createClass({
//   render: function() {
//     return (
//       <nav>
//         <ul>
//           <li><IndexLink to="/" activeClassName="current">Get Weather</IndexLink></li>
//           <li><Link to="/examples" activeClassName="current">Examples</Link></li>
//           <li><Link to="/about" activeClassName="current">About</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// });

const Nav = React.createClass({
  render: function() {
    return (
      <nav id="nav-simple" className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="site-title"><IndexLink to="/">Weather App 2017</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><IndexLink to="/" activeClassName="current">Get Weather</IndexLink></li>
            <li><Link to="/examples" activeClassName="current">Examples</Link></li>
            <li><Link to="/about" activeClassName="current">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
