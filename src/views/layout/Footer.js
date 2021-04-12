import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright'

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <footer>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                <Link color="inherit" href="https://www.dblandit.com/">
                    DBlandIt
                </Link>{' '}
            </Typography>
            <Copyright />
        </footer>
    );
}

export default Footer;