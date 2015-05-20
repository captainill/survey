import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import * as SurveyAPI from '../api/SurveyAPI';
import SurveyStore from '../stores/SurveyStore';

export function requestSurvey(id) {
  // Exit early if we know about this survey
  if (SurveyStore.contains(id)) {
    return;
  }

  AppDispatcher.dispatchAsync(SurveyAPI.getSurvey(id), {
    request: AppConstants.REQUEST_SURVEY,
    success: AppConstants.REQUEST_SURVEY_SUCCESS,
    failure: AppConstants.REQUEST_SURVEY_ERROR
  }, { id });
}

export function saveAnswer(payload){
	AppDispatcher.dispatch(AppConstants.SAVE_ANSWER, payload);

	//save to localstorage
	SurveyAPI.saveAnswer(payload);
}