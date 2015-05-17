module.exports = {
  id: 's_1',
  name: 'Morning',
  description: 'Morning recap? Perform right as you start work for the day.',
  questions: [
    {
      id: 'q_1',
      type: 'multiple',
      required: true,
      body: 'What time did you go to sleep last night?',
      choices: [
        {
          id:'c_1',
          text: 'Before 11pm'
        },
        {
          id:'c_2',
          text: '11pm'
        },
        {
          id:'c_3',
          text: '12pm'
        },   
        {
          id:'c_4',
          text: '1am'
        },
        {
          id:'c_5',
          text: 'after 1am'
        }          
      ]
    },

    {
      id: 'q_2',
      type: 'likert',
      required: true,
      body: 'How well did you sleep last night?',
      choices: [
        {
          id:'c_1',
          scale: 1,
          text: 'really poorly'
        },
        {
          id:'c_2',
          scale: 2,
          text: 'poorly'
        },
        {
          id:'c_3',
          scale: 3,
          text: 'average'
        },   
        {
          id:'c_4',
          scale: 4,
          text: 'well'
        },
        {
          id:'c_5',
          scale: 5,
          text: 'very well'
        }          
      ]
    },      

    {
      id: 'q_3',
      type: 'likert',
      required: true,
      body: 'How motivated to you feel?',
      choices: [
        {
          id:'c_1',
          scale: 1,
          text: 'not at all'
        },
        {
          id:'c_2',
          scale: 2,
          text: 'below average'
        },
        {
          id:'c_3',
          scale: 3,
          text: 'average'
        },   
        {
          id:'c_4',
          scale: 4,
          text: 'somewhat'
        },
        {
          id:'c_5',
          scale: 5,
          text: 'very!'
        }          
      ]
    },

    {
      id: 'q_4',
      type: 'yes_no',
      required: true,
      body: 'Bowel movement?'
    },

    {
      id: 'q_5',
      type: 'yes_no',
      required: true,
      body: 'Did you meditate?'
    }, 

    {
      id: 'q_6',
      type: 'open',
      required: false,
      body: 'If you meditated how long did you meditate for?'
    }, 

    {
      id: 'q_7',
      type: 'open',
      required: true,
      body: 'What did you have for breakfast?'
    }, 

    {
      id: 'q_8',
      type: 'open',
      required: false,
      body: 'Anything else to report this morning?'
    }            

  ]
}