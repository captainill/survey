var React = require('react/addons');
var TransitionGroup = React.addons.CSSTransitionGroup;
var { RouteHandler } = require('react-router');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
  	var name = this.context.router.getCurrentPath();
    return (
      <div className="chatapp">
      	<TransitionGroup component="div" transitionName="example">
        	<RouteHandler key={name} />
        </TransitionGroup>
      </div>
    );
  }

});

module.exports = App;
