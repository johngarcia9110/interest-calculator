export const CALC_TOTAL_COST = 'CALC_TOTAL_COST';

export const calcTotalCost = ( principal, rate, years ) => {
    return {
        type: CALC_TOTAL_COST,
        principal,
        rate,
        years
    }
}