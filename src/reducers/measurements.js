//Measurement Reducer

const measurementsReducerDefaultState = {
    measurementsHistory: []
};

export default (state = measurementsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MEASUREMENTS':
            return {
                ...state,
                measurementsHistory: action.measurements
            }
        case 'ADD_NEW_MEASUREMENTS':
            return {
                ...state,
                measurementsHistory: [...state.measurementsHistory, action.measurements]
            };
        default:
            return state;
    }
};