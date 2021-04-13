import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api/courses';

import Typography from '@material-ui/core/Typography';

import NewCourseModal from '../../components/Modal/NewCourse.js'
import CourseGrid from '../../components/Grid/CoursesGrid'

import coursesTestData from '../../constants/fixture/courses'

const CoursesList = () => {
    const [courses, setCourses] = useState([]);

    async function fetchCourses() {
        setCourses(await getData());
        // setCourses(coursesTestData);
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Courses
            </Typography>
            <CourseGrid cards={courses}/>
            {/* TODO: Change position to be fixed */}
            <NewCourseModal fetchData={fetchCourses}/>
        </div>
    );
};

export default CoursesList;
