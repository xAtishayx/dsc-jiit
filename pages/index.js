import React from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import MainPage from "../components/mainpage";
import About from "../components/about";
import Contact from "../components/contact";
import Parallaxs from "../components/parallax";
const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Index() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Parallaxs />
      <About />

      
      <Contact />
      
    </div>
  );
}
