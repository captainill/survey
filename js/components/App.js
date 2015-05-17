var React = require('react');
var { RouteHandler } = require('react-router');

var App = React.createClass({

  render: function() {
    return (
      <div className="chatapp">
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = App;
