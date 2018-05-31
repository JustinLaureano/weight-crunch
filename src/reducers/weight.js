//Weight Reducer

const weightReducerDefaultState = {
    weightHistory: []
};

export default (state = weightReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_WEIGHT':
            return {
                ...state,
                weightHistory: action.weight
            };
        case 'ADD_NEW_WEIGHT':
            return {
                ...state,
                weightHistory: [...state.weightHistory, action.weight]
            };
        default:
            return state;
    }
};