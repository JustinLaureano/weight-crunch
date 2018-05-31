// Get Current User Profile

export default (profile) => {
    const sortedProfile = profile.profileHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    });

    return {
        dob: sortedProfile.slice().pop().dob,
        height: sortedProfile.slice().pop().height,
        gender: sortedProfile.slice().pop().gender,
        startWeight: sortedProfile.slice().pop().startWeight,
        goalWeight: sortedProfile.slice().pop().goalWeight,
        createdAt: sortedProfile.slice().pop().createdAt,
    };
};