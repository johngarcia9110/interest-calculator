import { combineReducers } from 'redux';
import { setTotal } from './setTotal';

// Using combineReducers preemptively to avoid refactoring in the future.
export default combineReducers({
    setTotal
});