import { SETTING_ORDER, SETTING_TOGGLE_VISIBILITY, CARD_VIEW_NEGATIVE, CARD_VIEW_POSITIVE, RECEIVE_CONJUGATIONS, UPDATE_INPUT, RECEIVE_URL } from './../actions';
import Store from './../store/konjushStore';

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

export const boundCardViewPositive = (at) => {
  Store.dispatch({
    type: CARD_VIEW_POSITIVE,
    at 
  })
}

export const boundCardViewNegative = (at) => {
  Store.dispatch({
    type: CARD_VIEW_NEGATIVE,
    at 
  })
}

export const boundReceiveConjugations = ({conjugations}) => {
  Store.dispatch({
    type: RECEIVE_CONJUGATIONS,
    conjugations
  })
}

export const boundReceiveURL = (url) => {
  Store.dispatch({
    type: RECEIVE_URL,
    url
  })
}

export const boundUpdateInput = (input) => {
  Store.dispatch({
    type: UPDATE_INPUT,
    input
  })
}