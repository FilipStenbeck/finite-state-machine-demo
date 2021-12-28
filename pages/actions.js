import { ThemeProvider, Breadcrumbs, Link, Switch, Chip } from '@mui/material';
import { useMachine } from '@xstate/react';
import { container, box, content, breadcrum, visualizeLink } from '../common/styles';
import { actionMachine } from '../machines/action-machine';
import { theme } from '../common/theme';

const Actions = () => {
  const [state, send] = useMachine(actionMachine);

  const handleChange = () => {
    state.value === 'inactive' ? send('START') : send('STOP');
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={container}>
        <div style={breadcrum}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/actions/">
              Actions
            </Link>
          </Breadcrumbs>
        </div>
        <div style={box}>
          <div style={content}>
            <Chip
              label={state.value}
              color={state.value == 'inactive' ? 'primary' : 'success'}
              variant={state.value == 'inactive' ? 'outlined' : ''}
            />
            <Switch onChange={handleChange} />

            <div style={visualizeLink}>
              <Link target="top" href="https://stately.ai/viz/8c4fb410-4209-4420-85a3-8d7fdef7a4f3">
                Visualize
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Actions;
