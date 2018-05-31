// Get User Weight History Dates
import moment from 'moment';

export default (weight, filters) => {
    const sortedWeight = weight.weightHistory.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse();

    switch (filters.weightChartView) {
        case 'All':
            return sortedWeight.map(weight => {
                return moment(weight.createdAt).format('l');
            });
        case '1 year':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(currentValue.createdAt, 'years', true) <= 1) {
                    return accumulator.concat(moment(currentValue.createdAt).format('l'));
                }
                return accumulator;
            }, []);
        case '3 months':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(currentValue.createdAt, 'months', true) <= 3) {
                    return accumulator.concat(moment(currentValue.createdAt).format('l'));
                }
                return accumulator;
            }, []);
        case '1 month':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(currentValue.createdAt, 'months', true) <= 1) {
                    return accumulator.concat(moment(currentValue.createdAt).format('l'));
                }
                return accumulator;
            }, []);
        case '1 week':
            return sortedWeight.reduce((accumulator, currentValue) => {
                if (moment().diff(currentValue.createdAt, 'weeks', true) <= 1) {
                    return accumulator.concat(moment(currentValue.createdAt).format('l'));
                }
                return accumulator;
            }, []);
        default:
            return sortedWeight.map(weight => {
                return moment(weight.createdAt).format('l');
            });
    }
};