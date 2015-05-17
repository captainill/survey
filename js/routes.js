var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var App = require('./components/App');
var Home = require('./components/Home');
var Survey = require('./components/Survey');

module.exports = (
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute name="home" handler={Home}/>
    <Route name="survey" path="survey/:id" handler={Survey}/>
  </Route>
);