const React = require("react");

const Nav = require("./Nav");

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
      {props.children}
    </div>
  );
}

module.exports = Main;
