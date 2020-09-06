import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Question from "./Question";
import quizArr from "../quiz.json";
import AppRouter, { history } from '../router/AppRouter';



const Quiz = ({}) => {
  const [answersArr, setAnswersArr] = useState([]);

  useEffect(() => {
    console.log(answersArr);
  }, [answersArr]);

  //calculate the grade
  const checkTest = () => {
    if (true || checkIfQuizFilled()) {
      //check if everything is Filled

      let grade = 0;
      answersArr.map((ansNum, indx) => {
        if (ansNum === quizArr[indx].right_answerNum) {
          grade = grade + quizArr[indx].score;
        }
      });

      history.push('/results');
      //  return grade;
    }
  };

  const checkIfQuizFilled = () => {
    let empty = [];
    answersArr.map((ans, indx) => {
      if (ans === undefined) {
        empty.push(indx + 1);
      }
    });
    if (empty.length > 0 || answersArr.length === 0) {
      let err = "";
      empty.forEach((emptyAnswerNum) => {
        err = `${emptyAnswerNum},` + err;
      });
      alert(
        `you mast fill all the questions , question number ${err} not filled, please fill it and press again`
      );
      return false;
    }
    return true;
  };

  const fillAnswersArr = (group_indx, ans) => {
    const tmp = answersArr;
    tmp[group_indx] = parseInt(ans);
    setAnswersArr([...tmp]);
  };

  return (
    <div>
      <Box className={"box"}>
        <ol>
          {quizArr.map((questionObj, indx) => (
            <li key={"Ques" + indx}>
              <Question
                fillAnswersArr={fillAnswersArr}
                key={"Ques" + indx}
                questionObj={questionObj}
                group={"group" + indx}
                group_indx={indx}
              />
            </li>
          ))}
        </ol>
      </Box>
      <Box className={"box"}>
        <button onClick={checkTest}>send Quiz</button>
      </Box>
      
    </div>
  );
};
export default Quiz;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 414px) {
  }
`;