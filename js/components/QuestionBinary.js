import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import AppConstants from '../constants/AppConstants';
import selectn from 'selectn';

export default class QuestionBinary {

	static propTypes = {
  	question: PropTypes.object
  }  

  render() {
    const _this = this;
    const questionID = this.props.question.id;
    const choices = this.props.question.choices.map(function(choice){
      return (
        <div key={ choice.id } >
          <input 
            onChange={_this.onChangeHandler.bind(_this, {
              questionID: questionID,
              choiceID: choice.id,
              answer: choice.text              
            })}
            type="radio"
            name={ questionID }
            id={ choice.id }
            defaultChecked={(_this.props.question.answer && (_this.props.question.answer === choice.id))}
            value={ choice.text } />
          <label htmlFor={ choice.id }>{ choice.text }</label>
        </div>
        )
    })

    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        <div className="choices c-binary">
        <fieldset> 
          { choices }
        </fieldset> 
        </div>
      </div>
    );
  }

  onChangeHandler(payload){
    SurveyActionCreators.saveAnswer(payload);
  }

}

module.exports = QuestionBinary;
