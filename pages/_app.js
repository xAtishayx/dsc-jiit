import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../assets/css/custom.css";
import "../assets/css/material-kit1c51.css";
import "../assets/css/font-awesome.min.css";
import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    window.addEventListener("load", function loading() {
      var preload = document.querySelector(".wrapper");
      preload.classList.add("load-end");
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Container>
          <Head>
            <title>DSC JIIT</title>
            <link rel="icon" href="assets/img/logo.png" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </AnimatePresence>
    );
  }
}

export default MyApp;
