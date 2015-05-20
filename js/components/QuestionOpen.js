import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import AppConstants from '../constants/AppConstants';

export default class QuestionOpen {

	static propTypes = {
  	question: PropTypes.object
  }

  render() {
    const answer = this.props.question.answer || null;

    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        <div className="choices c-open">
          <textarea onKeyUp={this.onKeyDownHandler.bind(this)} ref="textArea" name="open" placeholder="Enter your response" defaultValue={answer}/>
        </div>
      </div>
    );
  }

  onKeyDownHandler(){
    var text = this.refs.textArea.getDOMNode().value;

    SurveyActionCreators.saveAnswer({
      questionID: this.props.question.id,
      answer: text
    })
  }

}

module.exports = QuestionOpen;
