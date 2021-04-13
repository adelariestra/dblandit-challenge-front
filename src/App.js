import React from 'react';
import './App.css';
import Layout from './views/layout/Layout'

// Theming
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//Routing
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';



function App() {
  return (
    <ThemeProvider theme={createMuiTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: grey[500],
        },
      },
    })}>
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
