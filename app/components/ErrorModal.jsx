const React = require("react");
const ReactDOM = require("react-dom");
const ReactDOMServer = require("react-dom/server");

const ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: "An error occurred!",
      message: "Sorry, pal. Try again with a city that does exist."
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    const { title, message } = this.props;
    const modal_markup = (
      <div className="reveal small text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">Close</button>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
    let $modal = $(ReactDOMServer.renderToString(modal_markup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    let modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },
  render: function() {
    return (<div></div>);
  }
});

module.exports = ErrorModal;
