import database from '../firebase/firebase';
import { addWeight } from './weight';
import { login } from './auth';
import { startSetWeight } from './weight';
import { startSetMeasurements } from './measurements';
import { changePageView } from './filters';

// Set Profile
export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    profile
});
  
export const startSetProfile = (user) => {
    return (dispatch, getState) => {
        const uid = user.uid;
        return database.ref(`users/${uid}/profile`).once('value').then((snapshot) => {
            const profile = [];

            snapshot.forEach((childSnapshot) => {
                profile.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setProfile(profile));
            dispatch(startSetWeight(user));
            dispatch(startSetMeasurements(user));
            dispatch(changePageView('Overview'));
            dispatch(login(user));
        });
    };
};

export const updateProfile = (profile) => ({
    type: 'UPDATE_PROFILE',
    profile
});

// Update Profile for new User
export const onUpdateProfile = (profileData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            dob = '',
            height = '',
            gender = '',
            startWeight = '',
            goalWeight = '',
            createdAt = 0
        } = profileData;
        const profile = { dob, height, gender, startWeight, goalWeight, createdAt };
        const newWeight = { weight: startWeight, createdAt };
        
        database.ref(`users/${uid}/weight`).push(newWeight).then((ref) => {
            dispatch(addWeight({
                id: ref.key,
                ...newWeight
            }))
        });

        return database.ref(`users/${uid}/profile`).push(profile).then((ref) => {
            dispatch(updateProfile(profile));
        });
    };
};

// Update Goal Weight
export const onGoalUpdate = (goalWeight, profile) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const newProfile = {
            dob: profile.dob,
            height: profile.height,
            gender: profile.gender,
            startWeight: profile.startWeight,
            goalWeight,
            createdAt: profile.createdAt 
        };
        
        return database.ref(`users/${uid}/profile`).push(newProfile).then((ref) => {
            dispatch(updateProfile(newProfile));
        });
    };
};

// Update Profile Stats
export const onProfileUpdate = (newProfile, profile) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const updatedProfile = {
            dob: newProfile.dob,
            height: newProfile.height,
            gender: newProfile.gender,
            startWeight: profile.startWeight,
            goalWeight: profile.goalWeight,
            createdAt: profile.createdAt
        };
        
        return database.ref(`users/${uid}/profile`).push(updatedProfile).then((ref) => {
            dispatch(updateProfile(updatedProfile));
        });
    };
};