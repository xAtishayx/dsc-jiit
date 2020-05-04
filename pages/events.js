import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';
import Navbar from "../components/navbar";

export default function Events() {
  return (
    <Container maxWidth="sm">
      <Navbar />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Events
        </Typography>
        <Link href="/">Go to the main page</Link>
      </Box>
    </Container>
  );
}