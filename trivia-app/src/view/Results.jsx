import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Results = (props) => {
  let history = useHistory();
  const [gradesArr, setGrades] = useState([]);
  useEffect(() => {
    const grades = JSON.parse(localStorage.getItem("avissar-trivia"));
    if (!grades) {
      localStorage.setItem("avissar-trivia", JSON.stringify([]));
    } else {
      grades.push({
        time: props.location.state.time,
        grade: props.location.state.grade,
      });
      setGrades(grades);
    }
  }, []);
  return (
    <Box>
      <h3>
        today, {props.location.state.time}
        <br /> Your grade is :<span>{props.location.state.grade}</span>
      </h3>
      <Table>
        <h2>your scores table</h2>
        {gradesArr.map(({ time, grade }) => {
          return (
            <Tr key={time}>
              <Td className="time">{time}</Td>
              <Td className="score">{grade}</Td>
            </Tr>
          );
        })}
      </Table>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        let do the quiz again
      </button>
    </Box>
  );
};
export default Results;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  margin: 120px auto;
  line-height: 1.5;
  font-size: 1.2rem;
  text-align: center;
  span {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 5px;
  }
  @media only screen and (max-width: 414px) {
    width: 90%;
    margin: 50px auto;
  }
`;

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #cccaca;
  padding: 20px;
  background-color: beige;
  &:nth-child(odd) {
    background-color: #f3f3c8;
  }
`;
const Td = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .score {
    width: 10%;
  }
  .time {
    width: 90%;
  }
`;

const Table = styled.div`
  flex-direction: column;
  justify-content: space-around;
  margin: 20px;
  h2 {
    font-size: 1.5rem;
    margin: 20px;
  }
`;
