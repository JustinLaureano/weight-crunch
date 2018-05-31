import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startAddMeasurements } from '../actions/measurements';
import { changeMeasurementsView } from '../actions/filters';
import currentMeasurements from '../selectors/currentMeasurements';
import measurementsModel from '../images/measurements_model.png';

export class CreateMeasurements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chest: '',
            waist: '',
            hips: '',
            thighs: '',
            calves: '',
            createdAt: moment(),
            calendarFocused: false
        };
    };

    onChestChange = (e) => {
        const chest = e.target.value;
        this.setState(() => ({ chest }));
    };

    onWaistChange = (e) => {
        const waist = e.target.value;
        this.setState(() => ({ waist }));
    };

    onHipsChange = (e) => {
        const hips = e.target.value;
        this.setState(() => ({ hips }));
    };

    onThighsChange = (e) => {
        const thighs = e.target.value;
        this.setState(() => ({ thighs }));
    };

    onCalvesChange = (e) => {
        const calves = e.target.value;
        this.setState(() => ({ calves }));
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        const measurements = {
            chest: this.state.chest === '' ? this.props.measurements.chest : this.state.chest,
            waist: this.state.waist === '' ? this.props.measurements.waist : this.state.waist,
            hips: this.state.hips === '' ? this.props.measurements.hips : this.state.hips,
            thighs: this.state.thighs === '' ? this.props.measurements.thighs : this.state.thighs,
            calves: this.state.calves === '' ? this.props.measurements.calves : this.state.calves,
            createdAt: this.state.createdAt.valueOf()
        };
        this.props.startAddMeasurements(measurements);
        this.props.changeMeasurementsView("Overview");
    };
    
    render() {
        return (
            <section className="createMeasurements">
                <form className="createMeasurements__form" onSubmit={this.onSubmit}>
                    <p className="createMeasurements__directions">
                        Add new measurements in inches.
                    </p>
                    <section className="createMeasurements__inputGroup">
                        <input
                            className="createMeasurements__input"
                            type="number"
                            placeholder= ' '
                            value={this.state.chest}
                            onChange={this.onChestChange}
                        />
                        <label className="createMeasurements__chest">Chest</label>
                    </section>

                    <section className="createMeasurements__inputGroup">
                        <input
                            className="createMeasurements__input"
                            type="number"
                            placeholder= ' '
                            value={this.state.waist}
                            onChange={this.onWaistChange}
                            
                        />
                        <label className="createMeasurements__waist">Waist</label>
                    </section>

                    <section className="createMeasurements__inputGroup">
                        <input
                            className="createMeasurements__input"
                            type="number"
                            placeholder= ' '
                            value={this.state.hips}
                            onChange={this.onHipsChange}
                            
                        />
                        <label className="createMeasurements__hips">Hips</label>
                    </section>

                    <section className="createMeasurements__inputGroup">
                        <input
                            className="createMeasurements__input"
                            type="number"
                            placeholder= ' '
                            value={this.state.thighs}
                            onChange={this.onThighsChange}
                            
                        />
                        <label className="createMeasurements__thighs">Thighs</label>
                    </section>

                    <section className="createMeasurements__inputGroup">
                        <input
                            className="createMeasurements__input"
                            type="number"
                            placeholder= ' '
                            value={this.state.calves}
                            onChange={this.onCalvesChange}
                            
                        />
                        <label className="createMeasurements__calves">Calves</label>
                    </section>

                    <button type="submit" className="createMeasurements__submit">
                        Add Measurements
                    </button>  
                </form>

                <section className="createMeasurements__visual">
                    <img
                        src={measurementsModel}
                        alt="Measurements Visualizer"
                        className="measurementsOverview__img"
                    />
                </section>
            </section>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddMeasurements: (measurements) => dispatch(startAddMeasurements(measurements)),
    changeMeasurementsView: (measurementsView) => dispatch(changeMeasurementsView(measurementsView)),
});

export default connect(undefined, mapDispatchToProps)(CreateMeasurements);