import { CARD_VIEW_POSITIVE, CARD_VIEW_NEGATIVE, RECEIVE_CONJUGATIONS, RECEIVE_URL } from './../actions';

let initialState = {
  verb: '',
  url: '/conjugation',
  conjugations: false,
  cardStates: [
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true },
    { positive: true }
  ]
}

const conjugator = (state = initialState, action) => {
  switch(action.type){
    case CARD_VIEW_NEGATIVE:
      return {
        ...state,
        cardStates: state.cardStates.map((cardState, index) => index === action.at ? { positive: false } : cardState)
      }
    case CARD_VIEW_POSITIVE:
      return {
        ...state,
        cardStates: state.cardStates.map((cardState, index) => index === action.at ? { positive: true } : cardState)
      }
    case RECEIVE_CONJUGATIONS:
      return {
        ...state,
        conjugations: action.conjugations
      }
    case RECEIVE_URL:
      return {
        ...state,
        url: action.url
      }
    default:
      return state;
  }
}

export default conjugator;
