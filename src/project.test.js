import React from 'react';
import { CALC_TOTAL_COST } from './actions/index';
import { totalCost } from './reducers/totalCost';

describe('total', () => {

  it('should return the initial state', () => {
    expect(totalCost(undefined, {})).toEqual(0);
  });

  it('should handle CALC_TOTAL_COST', () => {
    const calcTotalCostAction = {
      type: CALC_TOTAL_COST,
      principal: 5000,
      rate: 0.025,
      years: 5,
    };
    const state = 0;
    const expectedResult = 5625;
    expect(totalCost(state, calcTotalCostAction)).toEqual(expectedResult);
  });

});
