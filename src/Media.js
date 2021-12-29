import { Typography, Box } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
const useStyles = styled(theme =>({
    
    root: {
        height: '100vh',
        backgroundColor: 'blue',
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'red',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'green',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'orange',
        },
        [theme.breakpoints.up('x1')]: {
            backgroundColor: 'cyan',
        },
    },
}));


function Media() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography>
            Welcome To MEdia
            </Typography>

        </Box>
    )
}

export default Media;
