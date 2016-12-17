const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");

const Main = require("./components/Main");
const Weather = require("./components/Weather");
const About = require("./components/About");
const Examples = require("./components/Examples");

// Load Foundation css
require("style!css!foundation-sites/dist/css/foundation.min.css");

// Start foundation
$(document).foundation();

// Load css
require("style!css!appStyles");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
