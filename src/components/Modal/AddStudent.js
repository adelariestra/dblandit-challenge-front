import React, { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';

import { postNewStudent } from '../../services/api/courses';
import { getData } from '../../services/api/students';


const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    floatingButton: {
        position: 'fixed',
        bottom: '5%',
        right: '10%',
        background: 'solid'
    }
}));

const StudentAdditionModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [student, setStudent] = React.useState(false);
    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // MODAL HANDLERS
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddition = (e) => {
        e.preventDefault();
        setLoading(true);

        postNewStudent(props.courseId, {
            student: student,
            score: e.target.score.value
        })
            .then(() => {
                props.fetchData();
            })
            .catch((err) => {
                //TODO: show error
                console.log(err)
            })
            .finally(() => {
                handleClose();
                setLoading(false);
            })

    }

    // DATA HANDLER
    const handleStudentChange = (event) => {
        setStudent(event.target.value);
    }

    async function fetchData() {
        var stData = await getData();
        stData = stData.map((st => { return { ...st, id: st._id } }))

        setStudents(stData);
    }

    useEffect(() => {
        fetchData();
    }, [student]);

    return (
        <div>
            <Button className={classes.floatingButton} variant="contained" color="primary" onClick={handleClickOpen}>
                + Add Student
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="student-dialog-title"
            >
                <DialogTitle id="student-dialog-title">Student Addition</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select the student you want to add to the course.
                    </DialogContentText>
                    <form id="student-addition" onSubmit={handleAddition} className={classes.form}>
                        <InputLabel htmlFor="student">Student</InputLabel>
                        <Select
                            autoFocus
                            inputProps={{
                                name: 'student',
                                id: 'id',
                            }}
                            value={student}
                            onChange={handleStudentChange}
                            required={true}
                            id='studentId'
                        >
                            <MenuItem id='false' value={false}>...</MenuItem>
                            {students.map((st) => {
                                return (
                                    <MenuItem id={st.id} value={st.id}>{st.fname + ' ' + st.lname}</MenuItem>
                                )
                            })}
                        </Select>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="score"
                            label="Score"
                            type="number"
                            InputProps={{
                                inputProps: {
                                    max: 10, min: 0
                                }
                            }}
                            fullWidth
                            required={true}

                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary" disabled={loading}>
                                Cancel
                                </Button>
                            <Button type="submit" color="primary" disabled={loading || !student}>
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>

    );

}

export default StudentAdditionModal;