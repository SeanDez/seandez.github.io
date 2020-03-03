import * as React from "react";
import {useState} from "react";
import styled from "styled-components";


// --------------- Props type definition

type PortfolioItemData = {
  image : {
    url : string
    , alt : string
  }
  , title : string
  , subtitle? : string
  , body : {
    main : string[],
    secondary? : string[]
  }
  , isFinished : boolean
}

type Props = {
  portfolioData : PortfolioItemData[]
}

// --------------- Component

export default (props: Props) => {
  
  const generatePortfolioItemsJsx = (isFinished: boolean) => {
    const portfolioItems = props.portfolioData
      .filter(object => object.isFinished === isFinished)
      .map(object => (
        <SinglePortfolioItemContainer>
          <ImageContainer key={object.title}>
            <Image
              src={require(`../images/image_placeholder.jpg`)}
              alt={`${object.image.alt}`}
            />
          </ImageContainer>
          <TextContainer>
            <h4>{object.title}</h4>
            {/* render subtitle only if there's a value*/}
            {object.subtitle && <h5>{object.subtitle}</h5>}
          
            {/* body paragraphs from array */}
            {object.body.main.map(string => (
              <p>{string}</p>
            ))}
            {object.body.secondary && object.body.secondary.map(string => (
              <SecondaryBodyText>{string}</SecondaryBodyText>
            ))}
          </TextContainer>
        </SinglePortfolioItemContainer>
      ));
    
    return portfolioItems;
  };
  
  
  // state for pending items, since it is variable
  const portfolioItemsInProgress = useState(generatePortfolioItemsJsx(false));
  
  
  return (
    <OuterContainer>
      <h3>Portfolio</h3>
      {generatePortfolioItemsJsx(true)}
      
      {/* conditionally render the pending project(s) */}
      {portfolioItemsInProgress.length > 0 && <h5>Current Projects I'm Working On</h5> }
      {portfolioItemsInProgress}
      
    </OuterContainer>
  )
}

// --------------- Styled components

const OuterContainer = styled.div`
  margin: 30px 0;
  padding: 30px 0;
`;

const ImageContainer = styled.div`
  width: 30vw;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  max-width: 60vw;
`;

const SecondaryBodyText = styled.p`
  color: #282c34;
`;

const SinglePortfolioItemContainer = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  border: 2px dashed red;
`;