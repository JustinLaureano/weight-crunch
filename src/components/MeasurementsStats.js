import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddNewMeasurements from './AddNewMeasurements';
import MeasurementsChart from './MeasurementsChart';
import MeasurementsOverview from './MeasurementsOverview';
import { changeMeasurementsView } from '../actions/filters';


export class MeasurementsStats extends React.Component {
    constructor(props) {
        super(props);
    };

    onChangeMeasurementsView = (e) => {
        const measurementsView = e.target.id;
        this.props.changeMeasurementsView(measurementsView);
    }
    
    render() {
        return (
            <div className="measurementsStats">
                <div className="measurementsStats__togglebar">
                    <button
                        className="measurementsStats__button"
                        id="Overview"
                        onClick={this.onChangeMeasurementsView}
                    >
                        Overview
                    </button>
                    <button
                        className="measurementsStats__button"
                        id="Chart"
                        onClick={this.onChangeMeasurementsView}
                    >
                        Chart
                    </button>
                    <button
                        className="measurementsStats__button"
                        id="Add New"
                        onClick={this.onChangeMeasurementsView}
                    >
                        Add New
                    </button>
                </div>
                {this.props.filters.measurementsView === 'Overview' && <MeasurementsOverview />}
                {this.props.filters.measurementsView === 'Chart' && <MeasurementsChart />}
                {this.props.filters.measurementsView === 'Add New' && <AddNewMeasurements />}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeMeasurementsView: (measurementsView) => dispatch(changeMeasurementsView(measurementsView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementsStats);