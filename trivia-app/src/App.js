import React, { useEffect } from "react";
import styled from "styled-components/macro";
import Quiz from './view/Quiz';


const App = ({  }) => {
 

  return (
    <Box className="App">
      <Quiz>     
      </Quiz>
      
     
    </Box>
  );
};

export default App;

const Box = styled.div`
 padding: 30px;
 width: 80%;
  margin: 10px auto;
 @media only screen and (max-width: 414px) {
    width: 300px;
    padding: 1px 5px;
  }
  @media only screen and (max-width: 375px) {
    width: 300px;
    padding: 1px 5px;
  }
  @media only screen and (max-width: 360px) {
    width: 300px;
  }
`;
