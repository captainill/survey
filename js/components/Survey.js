import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import SurveyStore from '../stores/SurveyStore';
import classNames from 'classnames';
import MainNavPartial from './partials/MainNavPartial';
/* eslint-disable no-unused-vars */
import connectToStores from '../utils/connectToStores';
/* eslint-enable no-unused-vars */


function requestData(props) {
  const { params } = props;
  const id = parseInt(params.id);

  SurveyActionCreators.requestSurvey(id);
}

/**
 * Retrieves state from stores for current props.
 */
function getState(props) { // eslint-disable-line no-unused-vars
  const { params } = props;
  const survey = SurveyStore.get(params.id);

  return {
    survey
  }
}

/* eslint-disable no-unused-vars */
const stores = [SurveyStore];
@connectToStores(stores, getState)
/* eslint-enable no-unused-vars */
export default class Survey {

	static propTypes = {
	  // Injected by React Router:
	  params: PropTypes.shape({
	    id: PropTypes.string.isRequired
  	}).isRequired,

  	// Injected by @connectToStores:
  	survey: PropTypes.object
  }

  constructor(props) {
    //this.renderStargazers = this.renderStargazers.bind(this);
  }	  

  componentWillMount() {
    requestData(this.props);
  }

  render() {
  	const { params } = this.props;
    let classes = classNames('survey-wrap', 'survey-'+this.props.params.id);

    return (
      <div className={classes}>
        <p>The Survey -- { this.props.params.id }</p>
        <div className="survey">

        </div>
        <div className="survey-nav">
          <MainNavPartial surveyID={this.props.params.id}/>
        </div>
      </div>
    );
  }

}

module.exports = Survey;
