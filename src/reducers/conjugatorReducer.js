import { 
  RECEIVE_URL, 
  RECEIVE_URL_AND_RECENT_VERB,
  CARD_TOGGLE_VIEW_STATE
} from './actions';

import initialState from './initialState';
import { map, filter } from './../utils/arrays';

const appState = (JSON.parse(window.localStorage.getItem('store')) || initialState).conjugator;

const conjugator = (state = appState, action) => {
  switch(action.type){
    case CARD_TOGGLE_VIEW_STATE:
      return {
        ...state,
        cardStates: map(state.cardStates, (cardState, index) => index === action.at ? action.view : cardState)
      }
    case RECEIVE_URL:
      return {
        ...state,
        url: action.url
      }
    case RECEIVE_URL_AND_RECENT_VERB:
      return {
        ...state,
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
    ...(state.recentVerbs.includes(action.verb) ? filter(state.recentVerbs, e => e !== action.verb) : state.recentVerbs)
  ].slice(0, 200)
}

export default conjugator;
