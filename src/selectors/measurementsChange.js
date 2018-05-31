// Return total measurements difference from start to current

export default (measurements) => {
    const sortedMeasurements = measurements.measurementsHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    const currentMeasurements = {
        chest: sortedMeasurements.slice().pop().chest,
        waist: sortedMeasurements.slice().pop().waist,
        hips: sortedMeasurements.slice().pop().hips,
        thighs: sortedMeasurements.slice().pop().thighs,
        calves: sortedMeasurements.slice().pop().calves,
        createdAt: sortedMeasurements.slice().pop().createdAt
    };

    const startMeasurements = {
        chest: sortedMeasurements.slice().shift().chest,
        waist: sortedMeasurements.slice().shift().waist,
        hips: sortedMeasurements.slice().shift().hips,
        thighs: sortedMeasurements.slice().shift().thighs,
        calves: sortedMeasurements.slice().shift().calves,
        createdAt: sortedMeasurements.slice().shift().createdAt
    };

    return [
        parseInt(currentMeasurements.chest - startMeasurements.chest),
        parseInt(currentMeasurements.waist - startMeasurements.waist),
        parseInt(currentMeasurements.hips - startMeasurements.hips),
        parseInt(currentMeasurements.thighs - startMeasurements.thighs),
        parseInt(currentMeasurements.calves - startMeasurements.calves)
    ].reduce((a, b) => a + b, 0);
};