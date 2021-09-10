import React from 'react'
import { List as MULIist, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import  { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './css';


const List = () => {
    const classes = useStyles();

    const contract = [
        {id: 1, type:'Income', category: 'salary', amount: 50, date: "last friday"}
    ];

    return (
        <MULIist dense={false} className={classes.List} >
            <Slide direction="down" in mountOnEnter unmountOnExit key={contract.id} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={contract.type === 'Income' ? classes.income: classes.expense} >
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={contract.category} sercondary={`£${contract.amount} - ${contract.date}`} />
                    <ListItemSecondaryAction >
                        <IconButton edge="end" aria-label="delete" onClick="" >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        </MULIist>
    )
}

export default List
