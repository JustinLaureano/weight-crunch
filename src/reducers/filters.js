//Filters Reducer

const filtersReducerDefaultState = {
    pageView: 'Overview',
    weightChartView: 'All',
    measurementsChartView: 'All',
    measurementsView: 'Overview',
    createProfileView: true
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE_VIEW':
        return {
            ...state,
            pageView: action.page
        };
        case 'CREATE_PROFILE_VIEW':
        return {
            ...state,
            createProfileView: false
        };
        case 'CHANGE_WEIGHT_CHART_VIEW':
            return {
                ...state,
                weightChartView: action.chartView
            };
        case 'CHANGE_MEASUREMENTS_CHART_VIEW':
            return {
                ...state,
                measurementsChartView: action.chartView
            };
        case 'CHANGE_MEASUREMENTS_VIEW':
            return {
                ...state,
                measurementsView: action.measurementsView
            };
        case 'RESET_FILTERS':
            return {
                ...state,
                pageView: 'overview'
            };
        default:
            return state;
    }
};