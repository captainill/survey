//import { Schema, arrayOf, normalize } from 'normalizr';

export function fetchSurvey(id) {
  switch(id){
    case 1 :
      return require('../data/MorningSurveryData');
    break;
    case 2 :
      return require('../data/AfternoonSurveryData');
    break;
    default :
      return require('../data/MorningSurveryData');
    break;        
  }
}