import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import Link from "../src/Link";
import styled from "styled-components";

import Navbar from "../components/navbar";
import MainPage from "../components/mainpage";
import About from "../components/about";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Index() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <About />
      <div></div>
    </div>
  );
}
