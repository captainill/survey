import AppDispatcher from '../dispatcher/AppDispatcher';
import SurveyStore from './SurveyStore';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
//import selectn from 'selectn';
import AppConstants from '../constants/AppConstants';

let _questions = {};

const QuestionStore = createStore({

  init(questions){
    for (var question in questions){
      let id = questions[question].id;
      _questions[id] = questions[question];
    }    
  },

  get(id) {
    return _questions[id];
  },

  getCurrentAnswered(){
    const surveyID = SurveyStore.getCurrentID();
    var answeredQuestions = [];
    for (var question in _questions){
      if (_questions[question].surveyID === surveyID) {
        if(_questions[question].answer){
          answeredQuestions.push(_questions[question].answer);
        }
      }      
    }
    return answeredQuestions;
  },

  getQuestions(id){
    var surveyQuestions = [];
    for (var question in _questions){
      if (_questions[question].surveyID === id) {
        surveyQuestions.push(_questions[question]);
      }      
    }
    return surveyQuestions;
  },

  saveQuestionAnswer(payload){
    let question = _questions[payload.question];
    question.answer = payload.answer;
  },

  contains(id) {
    return isInBag(_questions, id);
  }
});

QuestionStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.type) {

    case AppConstants.SAVE_ANSWER:
      //console.log('QuestionStore SAVE_ANSWER ', action.questionID, action.answer)
      //QuestionStore.emitChange();
    break;    

    default:
      // do nothing
  }

});


export default QuestionStore;
