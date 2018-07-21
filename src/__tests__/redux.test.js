import conjugatorReducer from './../reducers/conjugatorReducer';
import settingsReducer from './../reducers/settingsReducer';
import initialState from './../reducers/initialState';
import { SETTING_TOGGLE_VISIBILITY, SETTING_ORDER, RECEIVE_URL_AND_RECENT_VERB, RECEIVE_URL, CARD_TOGGLE_VIEW_STATE } from './../reducers/actions';


describe('>>> conjugatorReducer <<<', () => {

  it('action CARD_TOGGLE_VIEW_STATE', () => {

    expect(
      conjugatorReducer(initialState.conjugator, {
        type: CARD_TOGGLE_VIEW_STATE,
        at: 0,
        view: false
      })
    ).toMatchSnapshot();

    expect(
      conjugatorReducer(initialState.conjugator, {
        type: CARD_TOGGLE_VIEW_STATE,
        at: 4,
        view: false
      })
    ).toMatchSnapshot();

  })

  it('action RECEIVE_URL', () => {

    expect(
      conjugatorReducer(initialState.conjugator, {
        type: RECEIVE_URL,
        url: '/konjush/conjugation/yemek'
      })
    ).toMatchSnapshot()

    expect(
      conjugatorReducer(initialState.conjugator, {
        type: RECEIVE_URL,
        url: '/konjush/'
      })
    ).toMatchSnapshot()

  })

  it('action RECEIVE_URL_AND_RECENT_VERB', () => {

    expect(
      conjugatorReducer(initialState.conjugator, {
        type: RECEIVE_URL_AND_RECENT_VERB,
        url: '/konjush/conjugation/olmak',
        verb: 'olmak'
      })
    ).toMatchSnapshot()
  })

})

describe('>>> settingsReducers <<<', () => {

  it('action SETTING_TOGGLE_VISIBILITY', () => {

    expect(
      settingsReducer(initialState.settings, {
        type: SETTING_TOGGLE_VISIBILITY,
        tense: 'simple-past',
      })
    ).toMatchSnapshot()

  })

  it('action SETTING_ORDER', () => {

    expect(
      settingsReducer(initialState.settings, {
        type: SETTING_ORDER,
        from: 1,
        to: 0
      })
    ).toMatchSnapshot()
    
  })

})