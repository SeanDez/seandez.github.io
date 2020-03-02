import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";


type Props = {

}

export default (props: Props) => {

  
  return (
    <BasicInfoContainer>
      <SelfImageContainer>
        <SelfImage src={require("../images/self.jpg")} />
      </SelfImageContainer>
      <TextContainer>
        <h4>Full Stack Javascript and Distributed Systems Developer</h4>
        <p>Hi, my name is Sean. I've been developing web applications for 3 years. My main technologes are React.js, Node/Express.js, and various persistence layers including Postgres and MongoDB.</p>
        <p>Check out my projects below. I'm most proud of...</p>
        <p>You can contact me through the form towards the bottom of the page if you'd like to get in touch about something</p>
      </TextContainer>
    </BasicInfoContainer>
  )
}

const BasicInfoContainer = styled.div`
  border: 2px dotted mediumseagreen;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const SelfImageContainer = styled.div`
  width: 30vw;
  border: 2px dashed purple;
  height: auto;
`;

const SelfImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  max-width: 60vw;
`;