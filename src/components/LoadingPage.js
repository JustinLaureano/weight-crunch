import React from 'react';
import loaderGif from '../images/loader.gif';

const LoadingPage = () => (
  <div className="loader">
    <img className="loader__image" src={loaderGif} />
  </div>
);

export default LoadingPage;
