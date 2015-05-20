import { fetchSurvey, postAnswer } from '../utils/APIUtils';

export function getSurvey(id) {
  return fetchSurvey(id);
}

export function saveAnswer(payload){
	return postAnswer(payload)
}