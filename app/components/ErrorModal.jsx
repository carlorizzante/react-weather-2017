const React = require("react");

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
    const modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },
  render: function() {
    const { title, message } = this.props;
    return (
      <div className="reveal small text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">Close</button>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
});

module.exports = ErrorModal;
