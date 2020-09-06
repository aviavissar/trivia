import React from "react";
import styled from "styled-components";
import Answer from "./Answer";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";

const Question = ({questionObj, group,fillAnswersArr,group_indx }) => {
  const { answers, question,right_answerNum,score }=questionObj
  const [value, setValue] = React.useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    fillAnswersArr(group_indx,event.target.value)
  };
  return (
    <Box>
      <FormLabel component="legend">
        <span className="question">{question}</span>
      </FormLabel>
      <RadioGroup
        aria-label="position"
        name={group}
        value={value}
        onChange={handleRadioChange}
        required ={true}
      >
        {answers.map((ans, indx) => (
          <Answer index={indx} answer={ans} key={group + "_answer" + indx} />
        ))}
      </RadioGroup>
    </Box>
  );
};
export default Question;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3vh;
`;
