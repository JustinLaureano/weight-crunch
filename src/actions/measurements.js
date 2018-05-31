import database from '../firebase/firebase';

// Set Measurements
export const setMeasurements = (measurements) => ({
    type: 'SET_MEASUREMENTS',
    measurements
  });
  
export const startSetMeasurements = (user) => {
    return (dispatch, getState) => {
        const uid = user.uid;
        return database.ref(`users/${uid}/measurements`).once('value').then((snapshot) => {
            const measurements = [];

            snapshot.forEach((childSnapshot) => {
                measurements.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setMeasurements(measurements));
        });
    };
};

// Add Measurements
export const addMeasurements = (measurements) => ({
    type: 'ADD_NEW_MEASUREMENTS',
    measurements
});

export const startAddMeasurements = (measurementData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            chest = '',
            waist = '',
            hips = '',
            thighs = '',
            calves = '',
            createdAt = 0
        } = measurementData;
        const measurement = { chest, waist, hips, thighs, calves, createdAt };
  
        return database.ref(`users/${uid}/measurements`).push(measurement).then((ref) => {
            dispatch(addMeasurements({
                id: ref.key,
                ...measurement
            }));
        });
    };
};