import React from 'react';
import { connect } from 'react-redux';
import currentWeight from '../selectors/currentWeight';
import currentProfile from '../selectors/currentProfile';

export const WeightOverview = (props) => (
    <section className="weightOverview">
        <section className="weightOverview__section">
            <h4 className="weightOverview__bmi">BMI</h4>
            <h2>
                {Math.floor((props.currentWeight / props.height / props.height) * 703)}
            </h2>
            {Math.floor((props.currentWeight / props.height / props.height) * 703) <= 18 &&
                <p className="weightOverview__underweight">Underweight</p>
            }
            {Math.floor((props.currentWeight / props.height / props.height) * 703) > 18 &&
             Math.floor((props.currentWeight / props.height / props.height) * 703) <= 24 &&
                <p className="weightOverview__healthy">Healthy</p>
            }
            {Math.floor((props.currentWeight / props.height / props.height) * 703) > 24 &&
             Math.floor((props.currentWeight / props.height / props.height) * 703) <= 29 &&
                <p className="weightOverview__overweight">Overweight</p>
            }
            {Math.floor((props.currentWeight / props.height / props.height) * 703) > 29 &&
             Math.floor((props.currentWeight / props.height / props.height) * 703) <= 39 &&
                <p className="weightOverview__obese">Obese</p>
            }
            {Math.floor((props.currentWeight / props.height / props.height) * 703) > 39 &&
                <p className="weightOverview__morbidlyObese">Morbidly Obese</p>
            }
        </section>
        <section className="weightOverview__section">
            <h4 className="weightOverview__totalLoss">Total Loss</h4>
            <h2>{props.startWeight - props.currentWeight} lbs</h2>
            <p>{
                Math.floor(((props.startWeight - props.currentWeight) * 100) / (props.startWeight - props.goalWeight))
                }
                % to goal!
            </p>
        </section>
    </section>
);

const mapStateToProps = (state) => {
    return {
        currentWeight: currentWeight(state.weight).weight,
        height: currentProfile(state.profile).height,
        startWeight: currentProfile(state.profile).startWeight,
        goalWeight: currentProfile(state.profile).goalWeight,
    };
};

export default connect(mapStateToProps)(WeightOverview);