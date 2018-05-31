import React from 'react';
import { connect } from 'react-redux';
import currentWeight from '../selectors/currentWeight';
import currentProfile from '../selectors/currentProfile';


export class GeneralStats extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <section className="generalStats">
                
                {this.props.currentWeight.weight - this.props.profile.goalWeight > 0 ?
                    <section className="generalStats__goalDifference">
                        <p>You only have</p>
                        <h1 className="generalStats__goalNumber">
                            {this.props.currentWeight.weight - this.props.profile.goalWeight}
                        </h1>
                        <p>pounds to go!</p>
                    </section>
                    :
                    <section className="generalStats__goalDifference">
                        <p>You are</p>
                        <h1 className="generalStats__goalNumber">
                            {this.props.profile.goalWeight - this.props.currentWeight.weight}
                        </h1>
                        <p>pounds under!</p>
                    </section>
                }

                <section className="generalStats__goalTargets">
                    <section className="generalStats__startWeight">
                        <p>Start Weight</p>
                        <h2>{this.props.profile.startWeight} lbs</h2>
                    </section>
                    <section className="generalStats__goalWeight">
                        <p>Goal Weight</p>
                        <h2>{this.props.profile.goalWeight} lbs</h2>
                    </section>
                </section>
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        weight: state.weight,
        currentWeight: state.weight.weightHistory.length > 0 ? currentWeight(state.weight) : state.weight,
        profile: currentProfile(state.profile)
    };
};

export default connect(mapStateToProps)(GeneralStats);