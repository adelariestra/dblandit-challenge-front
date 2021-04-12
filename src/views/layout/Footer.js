import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright'

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6),
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <Link color="inherit" href="https://www.dblandit.com/">
                        DBlandIt
                </Link>{' '}
                </Typography>
                <Copyright />
            </footer>
        </div>

    );
}

export default Footer;