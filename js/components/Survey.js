import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import SurveyStore from '../stores/SurveyStore';
import classNames from 'classnames';
import MainNavPartial from './partials/MainNavPartial';
import QuestionRange from './QuestionRange';
import QuestionBinary from './QuestionBinary';
import QuestionOpen from './QuestionOpen';
/* eslint-disable no-unused-vars */
import connectToStores from '../utils/connectToStores';
/* eslint-enable no-unused-vars */
import selectn from 'selectn';


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

  }	  

  componentWillMount() {
    requestData(this.props);
  }

  render() {
  	const { params } = this.props;
    const classes = classNames('page-wrap', 'survey-'+this.props.params.id);
    const surveyName = selectn('name', this.props.survey)
    const surveyDescription = selectn('description', this.props.survey)

    const questionMap = this.props.questions.map(function(question){
      switch(question.type){
        case 'likert' :
        case 'multiple' :
          return <QuestionRange key={ question.id } question={question} />;
        case 'yes_no' :
          return <QuestionBinary key={ question.id } question={question} />;
        case 'open' :
          return <QuestionOpen key={ question.id } question={question} />;
        default :
          //none
      }
    })

    return (
      <div className={classes}>
        <h2>Survey - { surveyName }</h2>
        <p>{ surveyDescription }</p>
        <p>{this.props.completedText}</p>
        <div className="survey">
          { questionMap }
        </div>
        <div className="survey-nav">
          <MainNavPartial surveyID={this.props.params.id}/>
        </div>
      </div>
    );
  }

}

module.exports = Survey;
