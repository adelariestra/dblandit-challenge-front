import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api/courses';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import NewCourseModal from '../../components/Modal/NewCourse.js'
import AddStudentModal from '../../components/Modal/AddStudent.js'
import CourseGrid from '../../components/Courses/Grid'


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

    const classes = useStyles();

    //TODO: REMOVE TEST DATA
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Courses
                </Typography>
            <CourseGrid cards={cards} />
            {/* TODO: Change position to be fixed */}
            <NewCourseModal />
        </div>
    );
};

export default CoursesList;
