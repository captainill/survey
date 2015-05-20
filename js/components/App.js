import React from "react/addons";
import { RouteHandler } from 'react-router';

const { addons } = React;
const { CSSTransitionGroup } = addons;

export default class App extends React.Component{

  static contextTypes = {
    router: React.PropTypes.func
  }

  render() {
  	var name = this.context.router.getCurrentPath();
    return (
      <div className="app">
      	<CSSTransitionGroup component="div" transitionName="example">
        	<RouteHandler key={name} />
        </CSSTransitionGroup>
      </div>
    );
  }

};