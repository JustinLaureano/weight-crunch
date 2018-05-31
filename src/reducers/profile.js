//Profile Reducer

const profileReducerDefaultState = {
    profileHistory: []
};

export default (state = profileReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                profileHistory: action.profile
            };
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profileHistory: [...state.profileHistory, action.profile]
            };
        default:
            return state;
    }
};