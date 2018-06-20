import { SETTING_TOGGLE_VISIBILITY, SETTING_ORDER } from './actions';
import initialState from './initialState';
import { map } from './../utils/arrays';

const appState = (JSON.parse(window.localStorage.getItem('store')) || initialState).settings;

const settings = (state = appState, action) => {

  switch(action.type){
    case SETTING_TOGGLE_VISIBILITY:
      return map(state, setting => action.tense === setting.tense ? { ...setting, visible: !setting.visible } : setting);
    case SETTING_ORDER:
      return reorderArray(state, action.from, action.to);
    default:
      return state;
  }

}

function reorderArray(arr, position, to){
  arr = arr.slice();
  let target = arr.splice(position, 1)[0];
  return [...arr.slice(0, to), target, ...arr.slice(to)];
}

export default settings;