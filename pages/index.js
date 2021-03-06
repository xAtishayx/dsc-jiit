import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar2 from "../components/navbar2";
import MainPage from "../components/mainpage";
import About from "../components/about";
import Contact from "../components/contact";
import Parallaxs from "../components/parallax";
import Whatwedo from "../components/whatwedo";
import { motion, usePresence } from "framer-motion";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 5 },
  },
};

export default function Index() {
  const [isPresent, safeToRemove] = usePresence();

  return (
    <motion.div
      key="1"
      style={{ scrollBehavior: "smooth" }}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar2 />
      <MainPage />
      <Parallaxs />
      <div className="row">
        <div
          className="bg-yellow"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-blue"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-red"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
      </div>

      <About />
      <div className="row">
        <div
          className="bg-yellow"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-blue"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-red"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
      </div>

      <style jsx>{`
        .row{
          margin-right: 0;
      }
        @media(max-width:700px) {
          .about_section{
              margin-top: 10px;
              margin-bottom: 100px;
          }
          .row{
              margin-left: 0;
              margin-right: 0;
          }
      `}</style>

      <Whatwedo />

      <Contact />
    </motion.div>
  );
}
