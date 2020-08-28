import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';


function QuestionCount(props) {
  return (
    <div className="questionCount">
      <Progress percent={(props.counter/props.total)*100} showInfo={false} />
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;