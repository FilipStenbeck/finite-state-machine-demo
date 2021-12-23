import { ThemeProvider, Button, Stack, Breadcrumbs, Link } from '@mui/material';
import { useMachine } from '@xstate/react';
import { container, box, content, breadcrum } from '../../common/styles';
import { counterMachine } from '../../machines/counter-machine';
import { theme } from '../../common/theme';

const Counter = ({ data }) => {
  const [state, send] = useMachine(counterMachine);

  return (
    <ThemeProvider theme={theme}>
      <div style={container}>
        <div style={breadcrum}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/counter/">
              Counter
            </Link>
          </Breadcrumbs>
        </div>
        <div style={box}>
          <div style={content}>
            <h2>{state.context.count}</h2>
            <Stack spacing={2} direction="row">
              <Button onClick={() => send('DECREMENT')} variant="outlined">
                -
              </Button>
              <Button onClick={() => send('INCREMENT')} variant="contained">
                +
              </Button>
            </Stack>
            <Button onClick={() => send('RESET')} variant="text">
              Reset counter
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Counter;
