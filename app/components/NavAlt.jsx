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
  onFormSubmit: function(event) {
    event.preventDefault();
    const location = this.refs.location.value;
    if (typeof location === "string" && location.length > 0) {
      this.refs.location.value = "";
      this.props.onFormSubmit(location);
    }
  },
  render: function() {
    return (
      <nav id="nav-alt" className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="site-title"><IndexLink to="/">Weather App 2017</IndexLink></li>
            <li><IndexLink to="/" activeClassName="current">Get Weather</IndexLink></li>
            <li><Link to="/examples" activeClassName="current">Examples</Link></li>
            <li><Link to="/about" activeClassName="current">About</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                  <input type="search" ref="location" className="input-group-field" placeholder="Search weather by city..."/>
                  <div className="input-group-button">
                    <input type="submit" className="button" value="Get Weather"/>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
