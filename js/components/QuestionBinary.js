import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';

export default class QuestionBinary {

	static propTypes = {
  	quesion: PropTypes.object
  }  

  componentWillMount() {
  }

  render() {
    const questionID = this.props.question.id;
    const choices = this.props.question.choices.map(function(choice){
      return (
            <div key={ choice.id } >
              <input type="radio" name={ questionID } id={ choice.id } value={ choice.text } />
              <label htmlFor={ choice.id }>{ choice.text } </label>
            </div>
        )
    })

    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        <div className="choices">
        <fieldset> 
          { choices }
        </fieldset> 
        </div>
      </div>
    );
  }

}

module.exports = QuestionBinary;
