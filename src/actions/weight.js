import database from '../firebase/firebase';

// Set Weight
export const setWeight = (weight) => ({
    type: 'SET_WEIGHT',
    weight
  });
  
export const startSetWeight = (user) => {
    return (dispatch, getState) => {
        const uid = user.uid;
        return database.ref(`users/${uid}/weight`).once('value').then((snapshot) => {
            const weight = [];

            snapshot.forEach((childSnapshot) => {
                weight.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setWeight(weight));
        });
    };
};

// Add Weight
export const addWeight = (weight) => ({
    type: 'ADD_NEW_WEIGHT',
    weight
});

export const startAddWeight = (weightData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            weight = '',
            createdAt = 0
        } = weightData;
        const newWeight = { weight, createdAt };

        return database.ref(`users/${uid}/weight`).push(newWeight).then((ref) => {
            dispatch(addWeight({
                id: ref.key,
                ...newWeight
            }));
        });
    };
};