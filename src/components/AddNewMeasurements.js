import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { startAddMeasurements } from '../actions/measurements';
import { changeMeasurementsView } from '../actions/filters';
import currentMeasurements from '../selectors/currentMeasurements';
import measurementsModel from '../images/measurements_model.png';

export class AddNewMeasurements extends React.Component {
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
            <section className="addNewMeasurements">
                <form className="addNewMeasurements__form" onSubmit={this.onSubmit}>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        openDirection="down"
                        anchorDirection="right"
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <section className="addNewMeasurements__formGroup">
                        <section className="addNewMeasurements__inputGroup">
                            <input
                                className="addNewMeasurements__input"
                                type="number"
                                placeholder= ' '
                                value={this.state.chest}
                                onChange={this.onChestChange}
                                
                            />
                            <label className="addNewMeasurements__chest">Chest</label>
                        </section>
                        <section>
                            {this.state.chest === '' && 
                                <p className="addNewMeasurements__current">{this.props.measurements.chest}</p>
                            }
                            {this.state.chest === this.props.measurements.chest && 
                                <p className="addNewMeasurements__current">0</p>
                            }
                            {this.state.chest !== '' &&
                             this.state.chest < this.props.measurements.chest && 
                                <p className="addNewMeasurements__loss">-{this.props.measurements.chest - this.state.chest}</p>
                            }
                            {this.state.chest !== '' &&
                             this.state.chest > this.props.measurements.chest && 
                                <p className="addNewMeasurements__gain">+{this.state.chest - this.props.measurements.chest}</p>
                            }
                        </section>
                    </section>

                    <section className="addNewMeasurements__formGroup">
                        <section className="addNewMeasurements__inputGroup">
                            <input
                                className="addNewMeasurements__input"
                                type="number"
                                placeholder= ' '
                                value={this.state.waist}
                                onChange={this.onWaistChange}
                                
                            />
                            <label className="addNewMeasurements__waist">Waist</label>
                        </section>
                        <section>
                            {this.state.waist === '' && 
                                <p className="addNewMeasurements__current">{this.props.measurements.waist}</p>
                            }
                            {this.state.waist === this.props.measurements.waist && 
                                <p className="addNewMeasurements__current">0</p>
                            }
                            {this.state.waist !== '' &&
                            this.state.waist < this.props.measurements.waist && 
                                <p className="addNewMeasurements__loss">-{this.props.measurements.waist - this.state.waist}</p>
                            }
                            {this.state.waist !== '' &&
                            this.state.waist > this.props.measurements.waist && 
                                <p className="addNewMeasurements__gain">+{this.state.waist - this.props.measurements.waist}</p>
                            }
                        </section>
                    </section>

                    <section className="addNewMeasurements__formGroup">
                        <section className="addNewMeasurements__inputGroup">
                            <input
                                className="addNewMeasurements__input"
                                type="number"
                                placeholder= ' '
                                value={this.state.hips}
                                onChange={this.onHipsChange}
                                
                            />
                            <label className="addNewMeasurements__hips">Hips</label>
                        </section>
                        <section>
                            {this.state.hips === '' && 
                                <p className="addNewMeasurements__current">{this.props.measurements.hips}</p>
                            }
                            {this.state.hips === this.props.measurements.hips && 
                                <p className="addNewMeasurements__current">0</p>
                            }
                            {this.state.hips !== '' &&
                            this.state.hips < this.props.measurements.hips && 
                                <p className="addNewMeasurements__loss">-{this.props.measurements.hips - this.state.hips}</p>
                            }
                            {this.state.hips !== '' &&
                            this.state.hips > this.props.measurements.hips && 
                                <p className="addNewMeasurements__gain">+{this.state.hips - this.props.measurements.hips}</p>
                            }
                        </section>
                    </section>

                    <section className="addNewMeasurements__formGroup">
                        <section className="addNewMeasurements__inputGroup">
                            <input
                                className="addNewMeasurements__input"
                                type="number"
                                placeholder= ' '
                                value={this.state.thighs}
                                onChange={this.onThighsChange}
                                
                            />
                            <label className="addNewMeasurements__thighs">Thighs</label>
                        </section>
                        <section>
                            {this.state.thighs === '' && 
                                <p className="addNewMeasurements__current">{this.props.measurements.thighs}</p>
                            }
                            {this.state.thighs === this.props.measurements.thighs && 
                                <p className="addNewMeasurements__current">0</p>
                            }
                            {this.state.thighs !== '' &&
                            this.state.thighs < this.props.measurements.thighs && 
                                <p className="addNewMeasurements__loss">-{this.props.measurements.thighs - this.state.thighs}</p>
                            }
                            {this.state.thighs !== '' &&
                            this.state.thighs > this.props.measurements.thighs && 
                                <p className="addNewMeasurements__gain">+{this.state.thighs - this.props.measurements.thighs}</p>
                            }
                        </section>
                    </section>

                    <section className="addNewMeasurements__formGroup">
                        <section className="addNewMeasurements__inputGroup">
                            <input
                                className="addNewMeasurements__input"
                                type="number"
                                placeholder= ' '
                                value={this.state.calves}
                                onChange={this.onCalvesChange}
                                
                            />
                            <label className="addNewMeasurements__calves">Calves</label>
                        </section>
                        <section>
                            {this.state.calves === '' && 
                                <p className="addNewMeasurements__current">{this.props.measurements.calves}</p>
                            }
                            {this.state.calves === this.props.measurements.calves && 
                                <p className="addNewMeasurements__current">0</p>
                            }
                            {this.state.calves !== '' &&
                            this.state.calves < this.props.measurements.calves && 
                                <p className="addNewMeasurements__loss">-{this.props.measurements.calves - this.state.calves}</p>
                            }
                            {this.state.calves !== '' &&
                            this.state.calves > this.props.measurements.calves && 
                                <p className="addNewMeasurements__gain">+{this.state.calves - this.props.measurements.calves}</p>
                            }
                        </section>
                    </section>

                    <button type="submit" className="addNewMeasurements__submit">
                        Add Measurements
                    </button>  
                </form>

                <section className="addNewMeasurements__visual">
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

const mapStateToProps = (state) => {
    return {
        measurements: currentMeasurements(state.measurements)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddMeasurements: (measurements) => dispatch(startAddMeasurements(measurements)),
    changeMeasurementsView: (measurementsView) => dispatch(changeMeasurementsView(measurementsView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMeasurements);