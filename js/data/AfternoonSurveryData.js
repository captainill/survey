module.exports = {
  id: 's_1',
  name: 'Afternoon',
  description: 'Afternoon recap! Perform this around dinner time.',
  questions: [

    {
      id: 'q_1',
      type: 'likert',
      required: true,
      body: 'How much energy do you have?',
      choices: [
        {
          id:'c_1',
          scale: 1,
          text: 'none'
        },
        {
          id:'c_2',
          scale: 2,
          text: 'alittle'
        },
        {
          id:'c_3',
          scale: 3,
          text: 'average'
        },   
        {
          id:'c_4',
          scale: 4,
          text: 'a bit'
        },
        {
          id:'c_5',
          scale: 5,
          text: 'a ton!'
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
      body: 'Have you had an coffee?'
    },

    {
      id: 'q_6',
      type: 'open',
      required: true,
      body: 'What did you have for lunch?'
    }, 

    {
      id: 'q_7',
      type: 'open',
      required: false,
      body: 'Anything else to report this afternoon?'
    }            

  ]
}