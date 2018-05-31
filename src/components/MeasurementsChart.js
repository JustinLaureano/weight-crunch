import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import MeasurementsProgress from './MeasurementsProgress';
import measurementsHistory from '../selectors/measurementsHistory';
import { changeMeasurementsChartView } from '../actions/filters';

class MeasurementsChart extends React.Component {
    constructor(props) {
        super(props);
    };

    setChartView = (e) => {
        const chartView = e.target.id;
        this.props.changeMeasurementsChartView(chartView)
    };

    render() {
        return (
            <div className="container__measurementsChart">
                <div className="measurementsChart">
                    <div className="measurementsChart__viewOptions">
                        <button
                            type="button"
                            id="All"
                            className={this.props.filters.measurementsChartView === 'All' ? 
                                "measurementsChart__optionButton--active" : 
                                "measurementstChart__optionButton"
                            }
                            onClick={this.setChartView}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            id="1 year"
                            className={this.props.filters.measurementsChartView === '1 year' ? 
                                "measurementsChart__optionButton--active" : 
                                "measurementstChart__optionButton"
                            }
                            onClick={this.setChartView}
                        >
                            1 yr
                        </button>
                        <button
                            type="button"
                            id="3 months"
                            className={this.props.filters.measurementsChartView === '3 months' ? 
                                "measurementsChart__optionButton--active" : 
                                "measurementstChart__optionButton"
                            }
                            onClick={this.setChartView}
                        >
                            3 mon
                        </button>
                        <button
                            type="button"
                            id="1 month"
                            className={this.props.filters.measurementsChartView === '1 month' ? 
                                "measurementsChart__optionButton--active" : 
                                "measurementstChart__optionButton"
                            }
                            onClick={this.setChartView}
                        >
                            1 mon
                        </button>
                        <button
                            type="button"
                            id="1 week"
                            className={this.props.filters.measurementsChartView === '1 week' ? 
                                "measurementsChart__optionButton--active" : 
                                "measurementstChart__optionButton"
                            }
                            onClick={this.setChartView}
                        >
                            1 wk
                        </button>
                    </div>
                    <Line
                        data={{
                            labels: this.props.measurements.createdAt,
                            datasets: [
                                {
                                    label: "Chest",
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: this.props.measurements.chest,
                                },
                                {
                                    label: "Waist",
                                    borderColor: 'rgb(244, 66, 197)',
                                    data: this.props.measurements.waist,
                                },
                                {
                                    label: "Hips",
                                    borderColor: 'rgb(249, 152, 54)',
                                    data: this.props.measurements.hips,
                                },
                                {
                                    label: "Thighs",
                                    borderColor: 'rgb(54, 227, 249)',
                                    data: this.props.measurements.thighs,
                                },
                                {
                                    label: "Calves",
                                    borderColor: 'rgb(42, 234, 101)',
                                    data: this.props.measurements.calves,
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <MeasurementsProgress />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        measurements: measurementsHistory(state.measurements, state.filters)
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeMeasurementsChartView: (chartView) => dispatch(changeMeasurementsChartView(chartView))
});

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementsChart);