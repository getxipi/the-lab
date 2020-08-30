import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

import { List, Row, Col } from 'antd';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
              <List.Item className="gutter-row" span={6}>
                    <AnswerOption 
                      key={key.content}
                      answerContent={key.content}
                      answerType={key.type}
                      answer={props.answer}
                      questionId={props.questionId}
                      onAnswerSelected={props.onAnswerSelected}>
                    {console.log("args being passed key: ", key.content)};
                    {console.log("answerContent: ", key.content)};
                    {console.log("answerType: ", key.type)};
                    {console.log("answer: ", props.answer)};
                    {console.log("questionId", props.questionId)};
                    {console.log("onAnswerSelected:", props.onAnswerSelected)};
                    </AnswerOption>
              </List.Item>
        );
    }
    
    return (
        <div className="quiz">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <Row  gutter={16}>
            <List className="answerOptions"
              grid={{gutter: 16}}>
                {props.answerOptions.map(renderAnswerOptions)}
            </List>
          </Row>
        </div>
    );
  }
  
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;