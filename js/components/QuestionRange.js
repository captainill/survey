import React, { PropTypes } from 'react';
import QuestionStore from'../stores/QuestionStore';
import { createRangeDataList } from'../utils/FormUtils';


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
    const choices = this.props.question.choices.map(function(choice, i){
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
        { range }
      </div>
    );
  }

  onRangeChange(){
    console.log(this.refs.rangeInput.getDOMNode().value);
  }

  onRangeLabelClick(){
    this.onRangeChange();
  }

}

module.exports = QuestionRange;
