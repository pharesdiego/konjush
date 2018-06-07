import conjugator from './conjugatorReducer';
import input from './inputReducer';
import settings from './settingsReducer';
let i = {
  input: null,
  conjugator: {
    verb: '',
    path: '',
    conjugations: [],
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
  },
  settings: [
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
  ]
}
export {
  conjugator,
  input,
  settings
}