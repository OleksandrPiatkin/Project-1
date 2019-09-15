import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 40,
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h4" gutterBottom>
                    To-Do List
                </Typography>
            </Paper>
        </React.Fragment>
    )
}
