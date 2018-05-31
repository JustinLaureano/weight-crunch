import React from 'react';
import { connect } from 'react-redux';
import currentMeasurements from '../selectors/currentMeasurements';
import startMeasurements from '../selectors/startMeasurements';
import measurementsChange from '../selectors/measurementsChange';

export const MeasurementsProgress = (props) => (
    <section className="measurementsProgress">
        <h4 className="measurementsProgress__heading">Measurement Progress (inches)</h4>
        <section className="measurementsProgress__categories">
            <section className="measurementsProgress__category">
                <p 
                    className="measurementsProgress__categoryName"
                >
                    Chest: {props.measurements.chest}
                    {props.startMeasurements.chest > props.measurements.chest ?
                        <span className="measurementsProgress__categoryName--loss">
                            &emsp;(-{props.startMeasurements.chest - props.measurements.chest})
                        </span>
                        :
                        <span className="measurementsProgress__categoryName--gain">
                            &emsp;(+{props.measurements.chest - props.startMeasurements.chest})
                        </span>}
                </p>
            </section>
            <section className="measurementsProgress__category">
                <p 
                    className="measurementsProgress__categoryName"
                >
                    Waist: {props.measurements.waist}
                    {props.startMeasurements.waist > props.measurements.waist ?
                        <span className="measurementsProgress__categoryName--loss">
                            &emsp;(-{props.startMeasurements.waist - props.measurements.waist})
                        </span>
                        :
                        <span className="measurementsProgress__categoryName--gain">
                            &emsp;(+{props.measurements.waist - props.startMeasurements.waist})
                        </span>}
                </p>
            </section>
            <section className="measurementsProgress__category">
                <p 
                    className="measurementsProgress__categoryName"
                >
                    Hips: {props.measurements.hips}
                    {props.startMeasurements.hips > props.measurements.hips ?
                        <span className="measurementsProgress__categoryName--loss">
                            &emsp;(-{props.startMeasurements.hips - props.measurements.hips})
                        </span>
                        :
                        <span className="measurementsProgress__categoryName--gain">
                            &emsp;(+{props.measurements.hips - props.startMeasurements.hips})
                        </span>}
                </p>
            </section>
            <section className="measurementsProgress__category">
                <p 
                    className="measurementsProgress__categoryName"
                >
                    Thighs: {props.measurements.thighs}
                    {props.startMeasurements.thighs > props.measurements.thighs ?
                        <span className="measurementsProgress__categoryName--loss">
                            &emsp;(-{props.startMeasurements.thighs - props.measurements.thighs})
                        </span>
                        :
                        <span className="measurementsProgress__categoryName--gain">
                            &emsp;(+{props.measurements.thighs - props.startMeasurements.thighs})
                        </span>}
                </p>
            </section>
            <section className="measurementsProgress__category">
                <p 
                    className="measurementsProgress__categoryName"
                >
                    Calves: {props.measurements.calves}
                    {props.startMeasurements.calves > props.measurements.calves ?
                        <span className="measurementsProgress__categoryName--loss">
                            &emsp;(-{props.startMeasurements.calves - props.measurements.calves})
                        </span>
                        :
                        <span className="measurementsProgress__categoryName--gain">
                            &emsp;(+{props.measurements.calves - props.startMeasurements.calves})
                        </span>}
                </p>
            </section>
            <section className="measurementsProgress__category">
                {props.measurementsChange > 0 ?
                    <p className="measurementsProgress__totalGain">
                        Total Gained:&emsp;<span>{props.measurementsChange}</span>
                    </p>
                :
                    <p className="measurementsProgress__totalLoss">
                        Total Lossed:&emsp;<span>{props.measurementsChange}</span>
                    </p>
                }
            </section>
        </section>
    </section>
);

const mapStateToProps = (state) => {
    return {
        measurements: currentMeasurements(state.measurements),
        startMeasurements: startMeasurements(state.measurements),
        measurementsChange: measurementsChange(state.measurements)
    };
};

export default connect(mapStateToProps)(MeasurementsProgress);