var React = require('react');
var { Link } = require('react-router');

var Home = React.createClass({

  render: function() {
    return (
      <div className="welcome page-wrap">
      	<p>Survery App</p>
      	<Link to="survey" params={{id: "s_1"}}>Start now >></Link>
      </div>
    );
  }

});

module.exports = Home;
