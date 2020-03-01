import * as React from 'react';
import {useState} from "react";
import styled from "styled-components";

type Props = {

}

export default (props: Props) => {
  enum navItemIds {
    background = "background",
    portfolio = "portfolio",
    articles = "articles",
    contact = "contact"
  }
  
  const navItems = [navItemIds.background, navItemIds.portfolio, navItemIds.articles, navItemIds.contact];
  
  const selectedNavItem = useState();
  
  const navItemsJsx: any[] = navItems.map((itemEnum: string, index: number) => (
    <li
      key={index}
    >
      <a
        href={`#${itemEnum}`}
      >
        {itemEnum[0].toUpperCase() + itemEnum.substring(1)}
      </a>
    </li>
  ));
  
  
  return (
    <div>
      <StyledTopNav>
        {navItemsJsx}
      </StyledTopNav>
    </div>
  )
}


const StyledTopNav = styled.ul`
  text-decoration: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  border: 2px dashed orange;

  & > li > a {
    text-decoration: none;
  }
`;