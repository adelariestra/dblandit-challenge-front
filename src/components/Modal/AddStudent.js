import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
      },
      formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
      },
}));

const CourseModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [student, setStudent] = React.useState(false);

    // DATA HANDLER
    const handleStudentChange = (event) => {
        setStudent(event.target.value);
    }
    
    // MODAL HANDLERS
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // TODO: REMOVE TEST DATA
    const students = [{ id: 0, fname: "student0" }, { id: 1, fname: "student1" }, { id: 2, fname: "student2" }, { id: 3, fname: "student3" }]

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                + Add Student
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
                                value={student}
                                onChange={handleStudentChange}
                                inputProps={{
                                    name: 'student',
                                    id: 'id',
                                }}
                            >
                                <MenuItem value={false}>...</MenuItem>
                                {students.map((st) => {
                                    return (
                                        <MenuItem value={st.id}>{st.fname + ' ' + st.lname}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary" disabled={student === false}>
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>

    );

}

export default CourseModal;