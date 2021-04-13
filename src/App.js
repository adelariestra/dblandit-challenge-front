import './App.css';

import Layout from './views/layout/Layout'

import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import CoursesListView from './views/courses/list';
import CoursesDetailedView from './views/courses/detailed';

import React from 'react';


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
      <Layout>
        {/* <CoursesListView /> */}
        <CoursesDetailedView />
      </Layout>
    </ThemeProvider>

  );
}

export default App;
