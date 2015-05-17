import { fetchSurvey } from '../utils/APIUtils';

export function getSurvey(id) {
  return fetchSurvey(id);
}