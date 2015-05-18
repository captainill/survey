import React from 'react';
import { Link } from 'react-router';

export default class MainNavPartial extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className={(this.props.surveyID === '1') ? 'active' : ''}><Link to='survey' params={{id: "1"}}>Survey 1</Link></li>
        <li className={(this.props.surveyID === '2') ? 'active' : ''}><Link to='survey' params={{id: "2"}}>Survey 2</Link></li>
      </ul>
    );
  }
};

MainNavPartial.propTypes = { surveyID: React.PropTypes.number };
