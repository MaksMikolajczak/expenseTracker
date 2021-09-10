import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import useStyles from './css'

const Form = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} >
            <Grid item xs ={12} >
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} >
                <TextField type="number" laber="Amount" fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField type="date" laber="Date" fullWidth />
            </Grid>
            <Button className={classes.Button} variant="outlined" color="primary">Create</Button>
        </Grid>
    )
}

export default Form
