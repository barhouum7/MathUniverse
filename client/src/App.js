// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Courses from './components/Courses/Courses'
import Form from './components/Form/Form'
// import useStyles from './styles'

const App = () => {
  // const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
        Courses Control Panel
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Courses />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
