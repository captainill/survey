import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import selectn from 'selectn';

const _surveys = {};

const SurveyStore = createStore({
  contains(id) {
    return isInBag(_surveys, id);
  },

  get(id) {
    return _surveys[id];
  }
});

SurveyStore.dispatchToken = AppDispatcher.register(action => {
  const responseSurveys = selectn('response.surveys', action);
  if (responseSurveys) {
    mergeIntoBag(_surveys, responseSurveys);
    SurveyStore.emitChange();
  }
});

export default SurveyStore;
