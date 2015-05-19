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
  const id = params.id;

  SurveyActionCreators.requestSurvey(id);
}

/**
 * Retrieves state from stores for current props.
 */
function getState(props) { // eslint-disable-line no-unused-vars
  const { params } = props;
  const surveyID = params.id;
  const survey = SurveyStore.get(surveyID);
  const completedText = SurveyStore.getCompletedText(surveyID);
  const questions = SurveyStore.getQuestions(surveyID);

  return {
    survey,
    completedText,
    questions
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
  	survey: PropTypes.object,
    completedText: PropTypes.string
  }

  constructor(props) {
    //this.renderStargazers = this.renderStargazers.bind(this);
  }	  

  componentWillMount() {
    requestData(this.props);
  }

  render() {
  	const { params } = this.props;
    const classes = classNames('page-wrap', 'survey-'+this.props.params.id);
    const questionMap = this.props.questions.map(function(question){
      return <li key={ question.id }>{ question.body }</li>;
    })

    return (
      <div className={classes}>
        <p>The Survey -- { this.props.params.id }</p>
        <p>{this.props.completedText}</p>
        <div className="survey">
          <ul>
            { questionMap }
          </ul>
        </div>
        <div className="survey-nav">
          <MainNavPartial surveyID={this.props.params.id}/>
        </div>
      </div>
    );
  }

}

module.exports = Survey;
