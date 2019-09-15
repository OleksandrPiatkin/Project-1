import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const todoListItem = [
    {
        id: '1',
        content: 'Test1'
    },
    {
        id: 2,
        content: 'Test2'
    }
];

const useStyles = makeStyles(theme => ({
    list: {
        marginBottom: theme.spacing(2),
    },
    red: {
        color: 'red'
    }
}));

export default function ItemsList() {

const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <List className={classes.list}>
                {todoListItem.map(({ id, content }) => (
                    <React.Fragment key={id}>
                        <ListItem button >
                            <ListItemText>
                                <span className={classes.red}>{content}</span>
                            </ListItemText>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    )
}