import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers/rootReducer';

const konjushStore = createStore(combineReducers(reducers));

export default konjushStore;