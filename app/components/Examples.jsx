const React = require("react");
const { Link } = require("react-router");

// const Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples component</h3>
//     );
//   }
// });

const Examples = props => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</p>
      <ol>
        <li><Link to="/?location=Copenhagen,dk">Copenhagen, Denmark</Link></li>
        <li><Link to="/?location=London,uk">London, UK</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;
