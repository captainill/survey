import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
//import selectn from 'selectn';
import AppConstants from '../constants/AppConstants';

let _currentID = null;
let _surveys = {};

const SurveyStore = createStore({
  
  get(id) {
    return _surveys[id];
  },

  getCurrentID: function() {
    return _currentID;
  },

  getCurrent: function() {
    return this.get(this.getCurrentID());
  },  

  contains(id) {
    return isInBag(_surveys, id);
  }
});

SurveyStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.type) {

    case AppConstants.REQUEST_SURVEY_SUCCESS:
      let survey = action.response;
      if (survey) {
        _currentID = survey.id;
        mergeIntoBag(_surveys, survey);
        SurveyStore.emitChange();
      }
    break;

    default:
      // do nothing
  }

});


export default SurveyStore;
