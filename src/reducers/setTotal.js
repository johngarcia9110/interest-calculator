import { CALC_TOTAL_COST } from '../actions/index';

export const setTotal = ( state = 0, action ) => {
    switch(action.type){ // using switch (instead of if) statement to avoid refactoring in the future.
        case CALC_TOTAL_COST:
            return Math.round(action.principal * (1 + (action.rate * action.years)));
        default:
            return state;
    }
};