
  import * as React from 'react';
  import Box from '@mui/material/Box';
  import { Container, FormControl, Typography, InputLabel, Select, MenuItem, Grid } from '@mui/material';
  import Paper from '@mui/material/Paper';
  import { styled } from '@mui/material/styles';
  import { makeStyles } from '@mui/styles';
  import Chart from './Chart' 
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));
  const useStyles = makeStyles({
    container: {
      padding: '10px',
      // backgroundColor: "green",
    },
    // box: {
    //   maxWidth: "100%",
    //   display: "flex",
    //   flexDirection: "row",
    //   padding: "15px",
    // },
    list: {
      maxWidth: "70%",
    },
    img: {
      // maxWidth: "30%",
      // padding: "15px",
      // marginLeft:'100px',
    },
  })
  const Styles = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up(899)]: {
      maxWidth: "100%",
      display: "flex",
      // flexDirection: "row",
      padding: "15px",
    },
  }));
  export default function FixedContainer() {
    const classes = useStyles()
    return (
  
      <>
        <Container component={Paper} variant='outlined' className={classes.container}>
          <Box >
            <FormControl style={{ minWidth: 120, marginLeft: '50px', marginTop: 20, marginBottom: 20 }}>
              <InputLabel >Age</InputLabel>
              <Select
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
  
  
          <Styles>
          
          <Box className={classes.list} >
            {/* <Box> */}
              <Grid container spacing={2}>
                <Grid item lg={4}  xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                  <Typography variant='subTitle'>total pool size</Typography>
                  <Typography variant='h5'>10K</Typography>
                  </Box>
                  </Paper></Grid>
  
                  <Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant='subTitle'>employees issued ESOP</Typography>
                    <Typography variant='h6'>4</Typography>
                 </Box>
                  </Paper></Grid>
                  <Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={1.7}>
                <Typography variant='subTitle'>options used</Typography>
                    <Typography variant='h6'>2.7K</Typography>
                 </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options exercised</Typography>
                    <Typography variant="h6">1000</Typography>
                  </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options vested</Typography>
                    <Typography variant="h6">900</Typography>
                  </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options unvested</Typography>
                    <Typography variant="h6">800</Typography>
                  </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options unused</Typography>
                    <Typography variant="h6">10K</Typography>
                  </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">not-granted</Typography>
                    <Typography variant="h6">5K</Typography>
                 </Box>
                  </Paper></Grid><Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options surrendered</Typography>
                    <Typography variant="h6">1000</Typography>
                  </Box>
                  </Paper></Grid>
                  <Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options lapsed</Typography>
                    <Typography variant="h6">1200</Typography>
                  </Box>
                  </Paper></Grid>
                  <Grid item   xs={12} sm={6} md={4} >
                <Paper variant='outlined'>
                <Box p={2}>
                <Typography variant="subTitle">options buyback</Typography>
                    <Typography variant="h6">100</Typography>
                  </Box>
                  </Paper></Grid>
              
              </Grid>
            </Box>
  
  
            <Box className={classes.img}>
             <Chart/>
              {/* <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
             alt='' /> */}
            </Box>
          {/* </Box> */}
  </Styles>
  
  
        </Container>
        
      </>
    );
  }
  // p={2}