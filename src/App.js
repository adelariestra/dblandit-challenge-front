import './App.css';

import Layout from './views/layout/Layout'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function App() {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <Layout>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Courses
            </Typography>
        </Container >
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <a href="https://localhost:3000/courses/COURSE_ID">
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        COURSE_NAME - COURSE_YEAR
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            + Add Course
      </Button>
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="student-dialog-title"
          >
            <DialogTitle id="student-dialog-title">COURSE_NAME Student Addition</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Select the student you want to add to the course.
          </DialogContentText>
              <form className={classes.form} noValidate>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="student">Student</InputLabel>
                  <Select
                    autoFocus
                    value="s0"
                    inputProps={{
                      name: 'student',
                      id: 'studentid',
                    }}
                  >
                    <MenuItem value="s0">STUDENT 0</MenuItem>
                    <MenuItem value="s1">STUDENT 1</MenuItem>
                    <MenuItem value="s2">STUDENT 2</MenuItem>
                    <MenuItem value="s3">STUDENT 3</MenuItem>
                    <MenuItem value="s4">STUDENT 4</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
          </Button>
              <Button onClick={handleClose} color="primary">
                Add
          </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
