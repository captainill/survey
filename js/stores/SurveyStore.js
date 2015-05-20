import AppDispatcher from '../dispatcher/AppDispatcher';
import QuestionStore from './QuestionStore';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
//import selectn from 'selectn';
import AppConstants from '../constants/AppConstants';

let _currentID = null;
let _surveys = {};
let _surveyLength = 0;
let _currentQuestionsAnswered = 0;

function _addQuestions(survey){
  let questions = survey.questions.map(function(question){
    question.surveyID = survey.id;
    if(localStorage.getItem(question.id)){
      question.answer = JSON.parse(localStorage.getItem(question.id)).answer;
    }
    return question;
  })
  QuestionStore.init(questions); 
}

const SurveyStore = createStore({
  
  init(survey){
    _addQuestions(survey);

    _currentID = survey.id;
    _surveys[_currentID] = {
      id: survey.id,
      name: survey.name,
      description: survey.description,
      count: survey.questions.length
    }
    _surveyLength = this.getCurrentSurveyLength();
    _currentQuestionsAnswered = QuestionStore.getCurrentAnswered();
  },

  get(id) {
    return _surveys[id];
  },

  getCurrentSurveyLength() {
    return _surveys[_currentID].count;
  },  

  getCurrentID() {
    return _currentID;
  },

  getCurrent() {
    return this.get(this.getCurrentID());
  },

  getCompletedText(){
    return  (_currentQuestionsAnswered.length || 0 ) + ' of ' + _surveyLength + ' completed';
  },

  getQuestions(id){
    return QuestionStore.getQuestions(id);
  },

  contains(id) {
    return isInBag(_surveys, id);
  },


});

SurveyStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.type) {


    case AppConstants.REQUEST_SURVEY:
      _surveyLength = 0;
      SurveyStore.emitChange();
    break;

    case AppConstants.REQUEST_SURVEY_SUCCESS:
      let survey = action.response;
      if (survey) {
        SurveyStore.init(survey);
        SurveyStore.emitChange();
      }
    break;

    case AppConstants.ANSWER_QUESTION:
      AppDispatcher.waitFor([QuestionStore.dispatchToken]);
      _questionsAnswered = this.getCurrentAnsweredCount();
      SurveyStore.emitChange();
    break;

    default:
      // do nothing
  }

});


export default SurveyStore;
