import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Box,
  Typography,
  TextField,
} from '@material-ui/core';
import { Clear, Done } from '@material-ui/icons';
import isBalanced from '../algorithms/balancer/balancer';

function App() {
  const [balancedResponse, setBalanced] = useState('');

  const handleChange = (e) => {
    const textVal = e.target.value;
    setBalanced(isBalanced(textVal));
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Balancing Act!
        </Typography>
        <Typography variant="body1" component="section" gutterBottom>
          <TextField id="balancer-input" data-testid="balancer-input" type="text" onChange={handleChange} placeholder="Type some brackets..." />
          {balancedResponse ? <Done data-testid="balanced" /> : <Clear data-testid="not-balanced" />}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
