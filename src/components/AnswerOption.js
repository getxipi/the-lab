import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import { Card } from 'antd';


function AnswerOption(props) {
  return (
        <Card className="answerOption">
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            checked={props.answerType === props.answer}
            id={props.answerType}
            value={props.answerType}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
          />
          <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
          </label>
        </Card>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;