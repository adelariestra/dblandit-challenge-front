import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api/courses';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';

import CourseModal from '../../components/Courses/Modal'


const CoursesList = () => {
    const [courses, setCourses] = useState([]);

    async function fetchCourses() {
        const res = await getData();
        setCourses(res);
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
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
            backgroundColor: theme.palette.background.secondary,
            padding: theme.spacing(6),
        },
    }));

    const [open, setOpen] = React.useState(false);

    
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8];


    return (
        <div>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Courses
            </Typography>
            </Container >
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Link color="inherit" href="https://localhost:3000/courses/COURSE_ID">

                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            COURSE_NAME - COURSE_YEAR
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>{' '}
                        </Grid>
                    ))}
                </Grid>
                <CourseModal/>
            </Container>
        </div>
    );
};

export default CoursesList;
