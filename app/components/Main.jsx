const React = require("react");

const Nav = require("./NavAlt"); // choose between Nav and NavAlt

// const Main = React.createClass({
//   render: function() {
//     return (
//       <div id="main">
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

const Main = props => {
  return (
    <div id="main">
      <Nav/>
      <div className="row">
        <div className="small-12 small-centered medium-8 large-6 columns">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
