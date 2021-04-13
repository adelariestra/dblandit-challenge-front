import React, { useEffect, useState } from 'react';
import { getDataWithId } from '../../services/api/courses';

import Typography from '@material-ui/core/Typography';

import AddStudent from '../../components/Modal/AddStudent.js'
import StudentsGrid from '../../components/Grid/StudentsGrid'

const CoursesDetailedView = () => {
    const [course, setCourse] = useState({students:[]});

    async function fetchCourse() {
        setCourse(await getDataWithId("60709f01b97d0e4924c4b73a"));
    }

    useEffect(() => {
        fetchCourse();
    }, []);

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {course.theme+ ' - '+course.year}
            </Typography>
            <div>
                {course.students.map(part=>{
                    return <div>{part.student.lname+ ', '+part.student.fname}</div>
                })}
            </div>
            {/* <StudentsGrid rows={course.students} /> */}
            {/* TODO: Change position to be fixed */}
            <AddStudent />
        </div>
    );
};

export default CoursesDetailedView;
