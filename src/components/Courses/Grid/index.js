import React, { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const CourseGrid = (props) => {

    const useStyles = makeStyles((theme) => ({
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        cardContent: {
            flexGrow: 1,
        },

    }));

    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} >
            <Grid container spacing={4}>
                {props.cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        {/* TODO: change link to API url */}
                        <Link color="inherit" href={`https://localhost:4000/courses/${card.id}`}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.theme + '-' + card.year}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>{' '}
                    </Grid>
                ))}
            </Grid>
        </Container>

    );


}

export default CourseGrid;