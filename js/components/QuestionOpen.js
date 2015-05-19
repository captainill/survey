import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';

export default class QuestionOpen {

	static propTypes = {
  	quesion: PropTypes.object
  }

  constructor(props) {
  }	  

  componentWillMount() {
  }

  render() {
    return (
      <div className="question">
        <p>this.props.question.body</p>
        <div className="choices">
          <textarea name="open" placeholder="Enter your response" />
        </div>
      </div>
    );
  }

}

module.exports = QuestionOpen;
