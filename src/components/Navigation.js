import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePageView } from '../actions/filters';
import dashboardIconActive from '../images/nav_icons/dashboard_icon--active.png';
import dashboardIconInactive from '../images/nav_icons/dashboard_icon.png';
import measurementsIconActive from '../images/nav_icons/measurements_icon--active.png';
import measurementsIconInactive from '../images/nav_icons/measurements_icon.png';
import settingsIconActive from '../images/nav_icons/settings_icon--active.png';
import settingsIconInactive from '../images/nav_icons/settings_icon.png';
import weightIconActive from '../images/nav_icons/weight_icon--active.png';
import weightIconInactive from '../images/nav_icons/weight_icon.png';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
    };

    onPageChange = (e) => {
        const page = e.target.id;
        this.props.changePageView(page);
    };
    
    render() {
        return (
            <div className="navigation">
                <img
                    src={this.props.filters.pageView === 'Overview' ? 
                        dashboardIconActive : 
                        dashboardIconInactive
                    }
                    id="Overview"
                    onClick={this.onPageChange}
                />
                <img
                    src={this.props.filters.pageView === 'Weight' ? 
                        weightIconActive : 
                        weightIconInactive
                    }
                    id="Weight"
                    onClick={this.onPageChange}
                />
                <img
                    src={this.props.filters.pageView === 'Measurements' ?
                        measurementsIconActive : 
                        measurementsIconInactive
                    }
                    id="Measurements"
                    onClick={this.onPageChange}
                />
                <img
                    src={this.props.filters.pageView === 'Settings' ?
                        settingsIconActive : 
                        settingsIconInactive
                    }
                    id="Settings"
                    onClick={this.onPageChange}
                />
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
    changePageView: (page) => dispatch(changePageView(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);