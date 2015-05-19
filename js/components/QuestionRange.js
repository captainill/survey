import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import QuestionStore from'../stores/QuestionStore';

export default class QuestionRange {

	static propTypes = {
  	quesion: PropTypes.object
  }

  componentWillMount() {
  }

  render() {
    const choices = this.props.question.choices.map(function(choice){
      return <li key={ choice.id }>{ choice.text }</li>;
    })

    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        <div className="choices">
          <ul>
            { choices }
          </ul>
        </div>
      </div>
    );
  }

}

module.exports = QuestionRange;
