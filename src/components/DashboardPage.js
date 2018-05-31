import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import GeneralStats from './GeneralStats';
import MeasurementsStats from './MeasurementsStats';
import Settings from './Settings';
import WeightStats from './WeightStats';
import CreateProfile from './CreateProfile';
import CreateMeasurements from './CreateMeasurements';
import currentProfile from '../selectors/currentProfile';

export class DashboardPage extends React.Component {
  	constructor(props) {
		super(props);
	};

  	render() {
    	return (
			<div className="container__page">
				{this.props.profile.length === 0 ?
					<CreateProfile /> :
					this.props.measurements.length === 0 ?
					<CreateMeasurements /> :
					<div className="container__page">
						{
							this.props.filters.pageView === 'Overview' &&
							<div className="dashboard__overview">
								<Profile />
								<GeneralStats />
							</div>
						}
						{
							this.props.filters.pageView === "Weight" &&
							<WeightStats />
						}
						{
							this.props.filters.pageView === "Measurements" &&
							<MeasurementsStats />
						}
						{
							this.props.filters.pageView === "Settings" &&
							<Settings />
						}
					</div>
				}
			</div>

		);
  	};
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		profile: state.profile.profileHistory,
		measurements: state.measurements.measurementsHistory
    };
};

export default connect(mapStateToProps)(DashboardPage);