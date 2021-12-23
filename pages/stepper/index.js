import { useState } from 'react';
import { useMachine } from '@xstate/react';
import { Button, Stack, Breadcrumbs, Link } from '@mui/material';

import { container, box, content, breadcrum } from './styles';
import { stepMachine } from '../../machines/step-machine';

const Counter = ({ data }) => {
  const [state] = useMachine(stepMachine);
  const [currentStep, setCurrentStep] = useState(state.value);

  return (
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
          <h2>{currentStep}</h2>
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => setCurrentStep(stepMachine.transition(currentStep, 'PREV').value)}
              variant="outlined"
            >
              Prev
            </Button>
            <Button
              onClick={() => setCurrentStep(stepMachine.transition(currentStep, 'NEXT').value)}
              variant="contained"
            >
              Next
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Counter;
