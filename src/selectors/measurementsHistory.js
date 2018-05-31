// Get User Measurements History
import moment from 'moment';

export default (measurements, filters) => {
    const sortedMeasurements = measurements.measurementsHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    switch (filters.measurementsChartView) {
        case 'All':
            return {
                chest: sortedMeasurements.map(measurement => measurement.chest),
                waist: sortedMeasurements.map(measurement => measurement.waist),
                hips: sortedMeasurements.map(measurement => measurement.hips),
                thighs: sortedMeasurements.map(measurement => measurement.thighs),
                calves: sortedMeasurements.map(measurement => measurement.calves),
                createdAt: sortedMeasurements.map(measurement => moment(measurement.createdAt).format('l'))
            };
        case '1 year':
            let filteredMeasurementsYear = {
                chest: [],
                waist: [],
                hips: [],
                thighs: [],
                calves: [],
                createdAt: []
            };
            sortedMeasurements.map(measurement => {
                if (moment().diff(measurement.createdAt, 'years', true) <= 1) {
                    filteredMeasurementsYear.chest.push(measurement.chest);
                    filteredMeasurementsYear.waist.push(measurement.waist);
                    filteredMeasurementsYear.hips.push(measurement.hips);
                    filteredMeasurementsYear.thighs.push(measurement.thighs);
                    filteredMeasurementsYear.calves.push(measurement.calves);
                    filteredMeasurementsYear.createdAt.push(moment(measurement.createdAt).format('l'));
                }
            });
            return filteredMeasurementsYear;
        case '3 months':
            let filteredMeasurements3Months = {
                chest: [],
                waist: [],
                hips: [],
                thighs: [],
                calves: [],
                createdAt: []
            };
            sortedMeasurements.map(measurement => {
                if (moment().diff(measurement.createdAt, 'months', true) <= 3) {
                    filteredMeasurements3Months.chest.push(measurement.chest);
                    filteredMeasurements3Months.waist.push(measurement.waist);
                    filteredMeasurements3Months.hips.push(measurement.hips);
                    filteredMeasurements3Months.thighs.push(measurement.thighs);
                    filteredMeasurements3Months.calves.push(measurement.calves);
                    filteredMeasurements3Months.createdAt.push(moment(measurement.createdAt).format('l'));
                }
            });
            return filteredMeasurements3Months;
        case '1 month':
            let filteredMeasurements1Month = {
                chest: [],
                waist: [],
                hips: [],
                thighs: [],
                calves: [],
                createdAt: []
            };
            sortedMeasurements.map(measurement => {
                if (moment().diff(measurement.createdAt, 'months', true) <= 1) {
                    filteredMeasurements1Month.chest.push(measurement.chest);
                    filteredMeasurements1Month.waist.push(measurement.waist);
                    filteredMeasurements1Month.hips.push(measurement.hips);
                    filteredMeasurements1Month.thighs.push(measurement.thighs);
                    filteredMeasurements1Month.calves.push(measurement.calves);
                    filteredMeasurements1Month.createdAt.push(moment(measurement.createdAt).format('l'));
                }
            });
            return filteredMeasurements1Month;
        case '1 week':
            let filteredMeasurementsWeek = {
                chest: [],
                waist: [],
                hips: [],
                thighs: [],
                calves: [],
                createdAt: []
            };
            sortedMeasurements.map(measurement => {
                if (moment().diff(measurement.createdAt, 'weeks', true) <= 1) {
                    filteredMeasurementsWeek.chest.push(measurement.chest);
                    filteredMeasurementsWeek.waist.push(measurement.waist);
                    filteredMeasurementsWeek.hips.push(measurement.hips);
                    filteredMeasurementsWeek.thighs.push(measurement.thighs);
                    filteredMeasurementsWeek.calves.push(measurement.calves);
                    filteredMeasurementsWeek.createdAt.push(moment(measurement.createdAt).format('l'));
                }
            });
            return filteredMeasurementsWeek;
        default:
            return {
                chest: sortedMeasurements.map(measurement => measurement.chest),
                waist: sortedMeasurements.map(measurement => measurement.waist),
                hips: sortedMeasurements.map(measurement => measurement.hips),
                thighs: sortedMeasurements.map(measurement => measurement.thighs),
                calves: sortedMeasurements.map(measurement => measurement.calves),
                createdAt: sortedMeasurements.map(measurement => moment(measurement.createdAt).format('l'))
            };
    };
};