import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = (props) => (
  <header className="header">
        <Link to="/dashboard">
          <h1 className="header__title">Weight Crunch</h1>
        </Link>
        <p className="header__pageView">{ props.filters.pageView }</p>
  </header>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(Header);
