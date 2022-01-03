import { useState } from 'react';
import { useMachine } from '@xstate/react';
import { Button, Stack, Breadcrumbs, Link, ThemeProvider } from '@mui/material';

import { theme } from '../common/theme';
import { container, box, content, breadcrum, visualizeLink } from '../common/styles';
import { stepMachine, ONE, FINAL } from '../machines/step-machine';

const Counter = () => {
  const [state, send] = useMachine(stepMachine);

  return (
    <ThemeProvider theme={theme}>
      <div style={container}>
        <div style={breadcrum}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/stepper/">
              Stepper
            </Link>
          </Breadcrumbs>
        </div>
        <div style={box}>
          <div style={content}>
            <h2>{state.value}</h2>
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => send('PREV')}
                variant="outlined"
                disabled={state.value === 'one' || state.value === 'final'}
              >
                Prev
              </Button>
              <Button onClick={() => send('NEXT')} variant="contained" disabled={state.value === 'final'}>
                Next
              </Button>
            </Stack>
            <div style={visualizeLink}>
              <Link target="top" href="https://stately.ai/viz/5e278453-818e-4684-8dd0-fbdad9cae679">
                Visualize
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Counter;
