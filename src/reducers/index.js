import { combineReducers } from 'redux';
import { totalCost } from './totalCost';

// Using combineReducers preemptively to avoid refactoring in the future.
export default combineReducers({
    totalCost
});