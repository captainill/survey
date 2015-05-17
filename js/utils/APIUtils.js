//import { Schema, arrayOf, normalize } from 'normalizr';

function mockDBSurveyQuery(id){
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

export function fetchSurvey(id) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      var survey = mockDBSurveyQuery(id);
      resolve(survey)
    }, 1000);
  })
}