import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';

export default class QuestionOpen {

	static propTypes = {
  	question: PropTypes.object
  } 

  componentWillMount() {
  }

  render() {
    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        <div className="choices c-open">
          <textarea onKeyDown={this.onKeyDownHandler.bind(this)} ref="textArea" name="open" placeholder="Enter your response" />
        </div>
      </div>
    );
  }

  onKeyDownHandler(){
    console.log(this.refs.textArea.getDOMNode().value)
  }

}

module.exports = QuestionOpen;
