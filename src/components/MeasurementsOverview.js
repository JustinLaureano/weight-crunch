import React from 'react';
import { connect } from 'react-redux';
import currentMeasurements from '../selectors/currentMeasurements';
import measurementsModel from '../images/measurements_model.png';

export const MeasurementsOverview = (props) => (
  <section className="measurementsOverview">
    <section className="measurementsOverview__stats">
        <div className="measurementsOverview__measurements">
            <h3 className="measurementsOverview__chest">Chest</h3>
            <p>{props.measurements.chest} inches</p>
        </div>
        <div className="measurementsOverview__measurements">
            <h3 className="measurementsOverview__waist">Waist</h3>
            <p>{props.measurements.waist} inches</p>
        </div>
        <div className="measurementsOverview__measurements">
            <h3 className="measurementsOverview__hips">Hips</h3>
            <p>{props.measurements.hips} inches</p>
        </div>
        <div className="measurementsOverview__measurements">
            <h3 className="measurementsOverview__thighs">Thighs</h3>
            <p>{props.measurements.thighs} inches</p>
        </div>
        <div className="measurementsOverview__measurements">
            <h3 className="measurementsOverview__calves">Calves</h3>
            <p>{props.measurements.calves} inches</p>
        </div>
    </section>
    <section className="measurementsOverview__visual">
        <img
            src={measurementsModel}
            alt="Measurements Visualizer"
            className="measurementsOverview__img"
        />
    </section>
  </section>
);

const mapStateToProps = (state) => {
    return {
        measurements: currentMeasurements(state.measurements)
    };
};

export default connect(mapStateToProps)(MeasurementsOverview);