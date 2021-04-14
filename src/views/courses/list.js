import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api/courses';

import Typography from '@material-ui/core/Typography';

import NewCourseModal from '../../components/Modal/NewCourse.js'
import CourseGrid from '../../components/Grid/CoursesGrid'

import coursesTestData from '../../constants/fixture/courses'

const CoursesList = () => {
    const [courses, setCourses] = useState([]);

    async function fetchCourses(params) {
        const coursesData = await getData(params); 
        setCourses(coursesData.map((card) => { return ({ ...card, id: card._id }) }));
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Courses
            </Typography>
            <CourseGrid courses={courses} fetchData={fetchCourses}/>
            <NewCourseModal fetchData={fetchCourses}/>
        </div>
    );
};

export default CoursesList;
