import React from 'react'
import { Grid } from '@material-ui/core';

import Side from './components/side';

// import useStyles from './css'

const App = () => {
    // const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0} stlyle={{ height: '100vh'}}>
                <Grid Item xs={12} sm={4}>
                    <Side title="Income"/>
                </Grid>
                <Grid Item xs={12} sm={4}>
                    Main
                </Grid>
                <Grid Item xs={12} sm={4}>
                    <Side title="Expenses"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
