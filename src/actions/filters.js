//Change Page View
export const changePageView = (page) => ({
    type: 'CHANGE_PAGE_VIEW',
    page
});

//Create Profile Vie
export const createProfileView = () => ({
    type: 'CREATE_PROFILE_VIEW'
});

//Change Weight Chart View
export const changeWeightChartView = (chartView) => ({
    type: 'CHANGE_WEIGHT_CHART_VIEW',
    chartView
});

//Change Measurements Chart View
export const changeMeasurementsChartView = (chartView) => ({
    type: 'CHANGE_MEASUREMENTS_CHART_VIEW',
    chartView
});

//Change Measurements Tabbed Page View
export const changeMeasurementsView = (measurementsView) => ({
    type: 'CHANGE_MEASUREMENTS_VIEW',
    measurementsView
});

//Reset Filters
export const resetFilters = () => ({
    type: 'RESET_FILTERS'
});