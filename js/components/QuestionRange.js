import React, { PropTypes } from 'react';
import QuestionStore from'../stores/QuestionStore';
import { createRangeDataList } from'../utils/FormUtils';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import AppConstants from '../constants/AppConstants';


export default class QuestionRange {

	static propTypes = {
  	question: PropTypes.object
  }

  componentDidMount() {
    const rangeInput = React.findDOMNode(this.refs.rangeInput);
    createRangeDataList(rangeInput);
  }

  renderRange(range) {
    const _this = this;
    const questionID = this.props.question.id;
    let answerChoice = null;
    const choices = this.props.question.choices.map(function(choice, i){
      if(_this.props.question.answer && (_this.props.question.answer == choice.id)){
        answerChoice = i;
      }
      return <span onClick={ _this.onRangeLabelClick.bind(_this) } key={ choice.id }>{ choice.text }</span>;
    })    

    return (
      <div className="choices c-range">
        <div className="span-list">
          {choices}
        </div>
        <legend
          key={questionID}
          className="range-group">
          <input type="range"
            ref="rangeInput"
            id={"range-"+questionID}
            className="range-input"
            onChange={_this.onRangeChange.bind(_this)}
            min="0"
            max={choices.length - 1}
            step="1"
            defaultValue={answerChoice}
            list={"range-"+questionID}
            />
        </legend>
      </div>
    )
  }

  render() {
    const range = this.renderRange();

    return (
      <div className="question">
        <p>{this.props.question.body}</p>
        { range }
      </div>
    );
  }

  onRangeChange(){
    var rangeStep = this.refs.rangeInput.getDOMNode().value;

    SurveyActionCreators.saveAnswer({
      questionID: this.props.question.id,
      choiceID: this.props.question.choices[rangeStep].id,
      answer: this.props.question.choices[rangeStep].text
    });

  }

  onRangeLabelClick(){
    this.onRangeChange();
  }

}

module.exports = QuestionRange;
