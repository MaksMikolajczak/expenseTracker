import React from 'react'
import { List as MULIist, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import  { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './css';


const List = () => {
    const classes = useStyles();

    const transaction = [];

    return (
        <MULIist dense={false} className={classes.List} >
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={type === 'Income' ? classes.income: classes.expense} >
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category}/>
                </ListItem>
            </Slide>
        </MULIist>
    )
}

export default List
