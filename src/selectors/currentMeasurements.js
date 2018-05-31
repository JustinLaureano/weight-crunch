// Get Current User Measurements

export default (measurements) => {
    const sortedMeasurements = measurements.measurementsHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    return {
        chest: sortedMeasurements.slice().pop().chest,
        waist: sortedMeasurements.slice().pop().waist,
        hips: sortedMeasurements.slice().pop().hips,
        thighs: sortedMeasurements.slice().pop().thighs,
        calves: sortedMeasurements.slice().pop().calves,
        createdAt: sortedMeasurements.slice().pop().createdAt
    };
};