import React, { useEffect, useState } from 'react';
import { getDataWithId } from '../../services/api/courses';

import Typography from '@material-ui/core/Typography';

import AddStudent from '../../components/Modal/AddStudent.js'
import StudentsGrid from '../../components/Grid/StudentsGrid'

const CoursesDetailedView = (props) => {
    const [course, setCourse] = useState({ theme: 'loading', year: 2020, students: [] });
    const [loading, setLoading] = useState(false);

    async function fetchCourse() {
        setLoading(true);
        const data = await getDataWithId(props.match.params.courseId);
        const courseData = {
            ...data,
            students: data.students.map((part) => {
                return ({
                    ...part,
                    id: part.student._id,
                    ...part.student
                })
            })
        }
        setCourse(courseData);
        setLoading(false);
    }

    useEffect(() => {
        fetchCourse();
    }, []);

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {course.theme + ' - ' + course.year}
            </Typography>
            <StudentsGrid loading={loading} students={course.students} />
            {/* <AddStudent /> */}
        </div>
    );
};

export default CoursesDetailedView;
