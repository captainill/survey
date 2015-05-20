import React from 'react';
import { Link } from 'react-router';

export default class MainNavPartial extends React.Component {
  render() {
    return (
      <ul className="">
      	<li><Link to='home' >Home</Link></li>
        <li className={(this.props.surveyID === 's_1') ? 'active' : ''}><Link to='survey' params={{id: "s_1"}}>Morning</Link></li>
        <li className={(this.props.surveyID === 's_2') ? 'active' : ''}><Link to='survey' params={{id: "s_2"}}>Afternoon</Link></li>
      </ul>
    );
  }
};

MainNavPartial.propTypes = { surveyID: React.PropTypes.string };
