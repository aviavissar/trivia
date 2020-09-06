import React from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Answer = ({answer,index}) => {
  return (
    <Box className={"box"}>
    
      <FormControlLabel
     value={''+index}
        control={<Radio color="primary" />}
        label={answer}
        labelPlacement="end"
        required ={true}
      />
    </Box>
  );
};
export default Answer;

const Box = styled.div`
height: 30px;
`;


