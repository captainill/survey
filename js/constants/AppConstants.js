var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_THREAD: null,
    CREATE_MESSAGE: null,
    RECEIVE_RAW_CREATED_MESSAGE: null,
    RECEIVE_RAW_MESSAGES: null,
    REQUEST_SURVEY: null, 
    REQUEST_SURVEY_SUCCESS: null,
    REQUEST_SURVEY_ERROR: null
  })

};
