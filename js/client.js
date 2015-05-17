// This file bootstraps the entire application.
require('babel-core/polyfill');

var React = require('react');
var Router = require('react-router');
var { Route, HistoryLocation } = Router;
var routes = require('./routes')

window.React = React; // export for http://fb.me/react-devtools

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});