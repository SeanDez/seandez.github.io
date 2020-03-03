import React, {useState} from 'react';

import TopNav from "./TopNav";
import BasicInfoCard from "./BasicInfoCard";
import Portfolio from "./Portfolio";
import Articles from "./Articles";
import Contact from "./Contact";
import Footer from "./Footer";

import portfolioData from "../data/portFolio";
import articleData from "../data/article";

import styled from "styled-components";

import '../App.css';


export default (props: any) => {
  
  return (
    <div className="App" id="appContainer">
      
      {/* Header */}
       <TopNav />
      
      {/* Body */}
      <div id="bodyContainer">
        <BasicInfoCard />
        <Portfolio portfolioData={portfolioData} />
        <Articles articleData={articleData} />
        <Contact />
      </div>
      
      
      {/* Footer */}
      <Footer />
    </div>
  );
}


