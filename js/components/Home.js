import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component{

  render() {
    return (
      <div className="welcome page-wrap">
      	<p>Survery App</p>
      	<Link to="survey" params={{id: "s_1"}}>Start now >></Link>
      </div>
    );
  }

};
