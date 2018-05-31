// Get User Weight History
import moment from 'moment';

export default (weight, filters) => {
    const sortedWeight = weight.weightHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    switch (filters.weightChartView) {
        case 'All':
            return sortedWeight.map(weight => weight.weight);
        case '1 year':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(weight.createdAt, 'years', true) <= 1) {
                    return accumulator.concat(currentValue.weight);
                }
                return accumulator;
            }, []);
        case '3 months':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(weight.createdAt, 'months', true) <= 3) {
                    return accumulator.concat(currentValue.weight);
                }
                return accumulator;
            }, []);
        case '1 month':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(weight.createdAt, 'months', true) <= 1) {
                    return accumulator.concat(currentValue.weight);
                }
                return accumulator;
            }, []);
        case '1 week':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(weight.createdAt, 'weeks', true) <= 1) {
                    return accumulator.concat(currentValue.weight);
                }
                return accumulator;
            }, []);
        default:
            return sortedWeight.map(weight => weight.weight);
    }
};