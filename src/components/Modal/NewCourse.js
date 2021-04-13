import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


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
    floatingButton: {
        position: 'fixed',
        bottom: '5%',
        right: '10%',
        background: 'solid'
    }
}));

const CourseModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    // MODAL HANDLERS
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreation = () => {

        handleClose();
    }

    return (
        <div>
            <Button className={classes.floatingButton} variant="contained" color="primary" onClick={handleClickOpen}>
                + Add Course
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="student-dialog-title"
            >
                <DialogTitle id="student-dialog-title">Course Creation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insert the new course's data.
                    </DialogContentText>
                    <form className={classes.form} noValidate>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="theme"
                                label="Theme"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="year"
                                label="Year"
                                type="number"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="duration"
                                label="Duration"
                                type="number"
                                fullWidth
                            />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreation} color="primary" disabled={loading}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );

}

export default CourseModal;