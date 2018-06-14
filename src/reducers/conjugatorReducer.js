import { 
  CARD_VIEW_POSITIVE, 
  CARD_VIEW_NEGATIVE, 
  RECEIVE_CONJUGATIONS, 
  RECEIVE_URL, 
  ADD_RECENT_VERB,
  RECEIVE_CONJUGATIONS_URL_AND_RECENT_VERB
} from './actions';

import initialState from './initialState';

const appState = (JSON.parse(window.localStorage.getItem('store')) || initialState).conjugator;

const conjugator = (state = appState, action) => {
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
    case ADD_RECENT_VERB:
      return {
        ...state,
        recentVerbs: addRecentVerb(state, action)
      }
    case RECEIVE_CONJUGATIONS_URL_AND_RECENT_VERB:
      return {
        ...state,
        conjugations: action.conjugations,
        url: action.url,
        recentVerbs: addRecentVerb(state, action)
      }
    default:
      return state;
  }
}

const addRecentVerb = (state, action) => {
  return [
    action.verb, 
    ...(state.recentVerbs.includes(action.verb) ? state.recentVerbs.filter(e => e !== action.verb) : state.recentVerbs)
  ].slice(0, 100)
}

export default conjugator;
