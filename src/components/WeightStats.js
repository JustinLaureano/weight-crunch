import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddNewWeight from './AddNewWeight';
import WeightChart from './WeightChart';
import WeightOverview from './WeightOverview';
import currentWeight from '../selectors/currentWeight';


export class WeightStats extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div className="weightStats">
                <WeightChart />
                <WeightOverview />
                <AddNewWeight/>
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
    currentWeight: (weight) => dispatch(currentWeight(weight))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightStats);