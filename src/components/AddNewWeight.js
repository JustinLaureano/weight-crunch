import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { startAddWeight } from '../actions/weight';


export class AddNewWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
            createdAt: moment(),
            calendarFocused: false,
        };
    };

    onWeightChange = (e) => {
        const weight = e.target.value;
        this.setState(() => ({ weight }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        const weight = {
            weight: this.state.weight,
            createdAt: this.state.createdAt.valueOf()
        };
        if (weight.weight !== '') {
            this.props.startAddWeight(weight);
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    
    render() {
        return (
            <div className="addNewWeight">
                <form className="addNewWeight__form" onSubmit={this.onSubmit}>
                    <input 
                        type="number"
                        className="addNewWeight__input"
                        value={this.state.weight}
                        onChange={this.onWeightChange}
                    />
                    <button type="submit">
                        Add Weight
                    </button>  
                </form>
                <SingleDatePicker
                    date={this.state.createdAt}
                    openDirection="up"
                    anchorDirection="right"
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddWeight: (weight) => dispatch(startAddWeight(weight))
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWeight);