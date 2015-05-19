
function mockDBSurveyQuery(id){
  console.log('mock db id=', id);
  switch(id){
    case 's_1' :
      return require('../data/MorningSurveryData');
    break;
    case 's_2' :
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