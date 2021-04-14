import React, { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const loadServerRows = (filterValue, rows) => {
    return new Promise((resolve) => {

        if (!filterValue) {
            resolve(rows);
            return;
        }
        resolve(
            rows.filter(
                (row) => row.theme.toLowerCase().indexOf(filterValue) > -1,
            ),
        );
    });
}



const CourseGrid = (props) => {
    const [filterValue, setFilterValue] = React.useState();
    const [loading, setLoading] = React.useState(false);

    useEffect(()=>{
        // props.fetchData({theme:"ADR",year:2021})
    },);

    const onFilterChange = React.useCallback((params) => {
        setFilterValue(params.filterModel.items[0].value);
    }, []);

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
            <DataGrid
                rows={props.cards.map((card) => { return ({ ...card, id: card._id }) })}
                columns={[{ field: '_id', width: 150 }, { field: 'theme', width: 150 }, { year: 'year', width: 150 }]}
                filterMode="server"
                onFilterModelChange={onFilterChange}
                loading={loading} />
        </Container>

    );


}

export default CourseGrid;