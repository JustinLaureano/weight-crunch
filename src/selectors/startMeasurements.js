// Get Starting User Measurements

export default (measurements) => {
    const sortedMeasurements = measurements.measurementsHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    return {
        chest: sortedMeasurements.slice().shift().chest,
        waist: sortedMeasurements.slice().shift().waist,
        hips: sortedMeasurements.slice().shift().hips,
        thighs: sortedMeasurements.slice().shift().thighs,
        calves: sortedMeasurements.slice().shift().calves,
        createdAt: sortedMeasurements.slice().shift().createdAt
    };
};