import { UPDATE_INPUT } from './../actions';
export default (state = null, action) => action.type === UPDATE_INPUT ? action.input : state;