import { ThemeProvider } from '@mui/material/styles';
import { List, ListItem, ListItemText, Link } from '@mui/material/';
import Image from 'next/image';
import { theme } from '../common/theme';

const Home = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={container}>
        <div style={box}>
          <Image src="/logo.svg" alt="Xstate Logo" width={180} height={180} />
          <div style={content}>
            <List component="nav" aria-label="Demo links">
              <ListItem button>
                <Link href="/counter" underline="none" color="textPrimary">
                  <ListItemText primary="The classic counter demo" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/stepper" underline="none" color="textPrimary">
                  <ListItemText primary="A demo of stepping through a sequence" />
                </Link>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#ECECEC',
};

export const box = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderRadius: '10px',
  filter: 'drop-shadow(1px 1px 1px black)',
  padding: '20px',
};

const content = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  userSelect: 'none',
  marginLeft: '20px',
};

export default Home;
