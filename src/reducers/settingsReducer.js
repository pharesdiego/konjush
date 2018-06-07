import { SETTING_TOGGLE_VISIBILITY, SETTING_ORDER } from './../actions';

let initialState = [
  {
    title: 'Aorist',
    tense: 'aorist',
    visible: true
  },
  {
    title: 'Gerund',
    tense: 'gerund',
    visible: true
  },
  {
    title: 'Future',
    tense: 'future',
    visible: true
  },
  {
    title: 'Simple Past',
    tense: 'simple-past',
    visible: true
  },
  {
    title: 'Miş Past',
    tense: 'mis-past',
    visible: true
  },
  {
    title: 'Past Continuous',
    tense: 'past-continuous',
    visible: true
  },
  {
    title: 'Present Indefinite',
    tense: 'present-indefinite',
    visible: true
  },
  {
    title: 'Gerund Indefinite',
    tense: 'present-continuous-indefinite',
    visible: true
  },
  {
    title: 'Future Indefinite',
    tense: 'future-indefinite',
    visible: true
  },
  {
    title: 'Potential',
    tense: 'potential',
    visible: true
  }
];

const settings = (state = initialState, action) => {

  switch(action.type){
    case SETTING_TOGGLE_VISIBILITY:
      return state.map(setting => action.tense === setting.tense ? { ...setting, visible: !setting.visible } : setting);
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