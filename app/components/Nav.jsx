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

const Nav = props => {
  return (
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="current">Get Weather</IndexLink></li>
        <li><Link to="/examples" activeClassName="current">Examples</Link></li>
        <li><Link to="/about" activeClassName="current">About</Link></li>
      </ul>
    </nav>
  );
}

module.exports = Nav;
