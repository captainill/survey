import '../scss/main.scss';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

window.React = React; // export for http://fb.me/react-devtools

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});