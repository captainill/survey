import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import SurveyStore from '../stores/SurveyStore';
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
  	console.log('this.props.params', this.props.params);

    return (
      <div className="survey">
      	<p>The Survey</p>
      </div>
    );
  }

}

module.exports = Survey;
