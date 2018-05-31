import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import weightHistory from '../selectors/weightHistory';
import weightHistoryDates from '../selectors/weightHistoryDates';
import { changeWeightChartView } from '../actions/filters';

class WeightChart extends React.Component {
    constructor(props) {
        super(props);
    };

    setChartView = (e) => {
        const chartView = e.target.id;
        this.props.changeWeightChartView(chartView)
    };

    render() {
        return (
            <div className="weightChart">
                <div className="weightChart__viewOptions">
                    <button
                        type="button"
                        id="All"
                        className={this.props.filters.weightChartView === 'All' ? 
                            "weightChart__optionButton--active" : 
                            "weightChart__optionButton"
                        }
                        onClick={this.setChartView}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        id="1 year"
                        className={this.props.filters.weightChartView === '1 year' ? 
                            "weightChart__optionButton--active" : 
                            "weightChart__optionButton"
                        }
                        onClick={this.setChartView}
                    >
                        1 yr
                    </button>
                    <button
                        type="button"
                        id="3 months"
                        className={this.props.filters.weightChartView === '3 months' ? 
                            "weightChart__optionButton--active" : 
                            "weightChart__optionButton"
                        }
                        onClick={this.setChartView}
                    >
                        3 mon
                    </button>
                    <button
                        type="button"
                        id="1 month"
                        className={this.props.filters.weightChartView === '1 month' ? 
                            "weightChart__optionButton--active" : 
                            "weightChart__optionButton"
                        }
                        onClick={this.setChartView}
                    >
                        1 mon
                    </button>
                    <button
                        type="button"
                        id="1 week"
                        className={this.props.filters.weightChartView === '1 week' ? 
                            "weightChart__optionButton--active" : 
                            "weightChart__optionButton"
                        }
                        onClick={this.setChartView}
                    >
                        1 wk
                    </button>
                </div>
                <Line
                    data={{
                        labels: this.props.weightHistoryDates,
                        datasets: [{
                        label: "Weight History",
                        backgroundColor: 'rgb(50, 166, 157)',
                        borderColor: 'rgb(50, 166, 157)',
                        data: this.props.weightHistory,
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        weightHistory: weightHistory(state.weight, state.filters),
        weightHistoryDates: weightHistoryDates(state.weight, state.filters)
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeWeightChartView: (chartView) => dispatch(changeWeightChartView(chartView))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightChart);