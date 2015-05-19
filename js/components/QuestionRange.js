import React, { PropTypes } from 'react';
import * as SurveyActionCreators from'../actions/SurveyActionCreators';
import QuestionStore from'../stores/QuestionStore';
import { createRangeDataList } from'../utils/FormUtils';


export default class QuestionRange {

	static propTypes = {
  	quesion: PropTypes.object
  }

  componentDidMount() {
    let rangeInput = React.findDOMNode(this.refs.rangeInput);
    console.log(rangeInput)
    createRangeDataList(rangeInput);
  }

  renderRange(range) {
    const _this = this;
    const questionID = this.props.question.id;
    const choices = this.props.question.choices.map(function(choice){
      return <span key={ choice.id }>{ choice.text }</span>;
    })    

    return (
      <div>
        {choices}
        <legend
          key={questionID}
          className="range-group">
          <input type="range"
            ref="rangeInput"
            id={"range-"+questionID}
            className="range-input"
            onChange={_this.onRangeChange}
            min="1"
            max={choices.length}
            step="1"
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
        <div className="choices c-range">
            { range }
        </div>
      </div>
    );
  }

  onRangeChange(one, two){
    console.log('range onChange');
    console.log(one, two)
  }

}

module.exports = QuestionRange;
