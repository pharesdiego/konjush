import { 
  SETTING_ORDER, 
  SETTING_TOGGLE_VISIBILITY, 
  RECEIVE_URL,
  RECEIVE_URL_AND_RECENT_VERB,
  CARD_TOGGLE_VIEW_STATE
 } from './../reducers/actions';
import Store from './../store';

export const boundSettingOrder = ({ from, to }) => {
  Store.dispatch({
    type: SETTING_ORDER,
    from,
    to
  })
};

export const boundSettingToggleVisibility = (tense) => {
  Store.dispatch({
    type: SETTING_TOGGLE_VISIBILITY,
    tense
  })
}
export const boundCardToggleViewState = ({ at, view }) => {
  Store.dispatch({
    type: CARD_TOGGLE_VIEW_STATE,
    at,
    view,
  })
}

export const boundReceiveURL = (url) => {
  Store.dispatch({
    type: RECEIVE_URL,
    url
  })
}

export const boundReceiveUrlAndRecentVerb = (
  { url, verb }
) => {
  Store.dispatch({
    type: RECEIVE_URL_AND_RECENT_VERB,
    url,
    verb
  })
}