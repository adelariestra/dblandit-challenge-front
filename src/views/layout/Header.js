import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <header>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Link color="inherit" href="/" underline="none">
                        <Typography variant="h6" color="inherit" noWrap>
                            DBlandIt
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;