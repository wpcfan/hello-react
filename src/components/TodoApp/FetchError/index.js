import React, { PropTypes } from 'react';
import './style.css';

const FetchError = ({ message, onRetry }) => (
  <div className="err-card mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">Error</h2>
    </div>
    <div className="mdl-card__supporting-text">
      Could not fetch todos. {message}
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={onRetry}>
        Retry
      </button>
    </div>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FetchError;
