import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      You prefer <strong>{props.quizResult}</strong>!
      These were your answers:
      <ul>{props.counter}</ul>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;