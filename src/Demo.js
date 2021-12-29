import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, FormControl, Typography, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Chart from './Chart'
import Drop from './Drop'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles({
  container: {
    // padding: '30px',
    // backgroundColor: "green",
  },
  // box: {
  //   maxWidth: "100%",
  //   display: "flex",
  //   flexDirection: "row",
  //   padding: "15px",
  // },
  list: {
    maxWidth: "60%",
    marginBottom: '20px'
  },
  img: {
    maxWidth: "470px",
    // marginRight:'100px',
    // margin:'auto'
    // padding: "15px",
    // marginBottom:'50px',
  },
})
const Styles = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up(899)]: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    // padding: "15px",
  },
}));
export default function FixedContainer() {
  const classes = useStyles()
  return (

    <>
      <Container component={Paper} variant='outlined' className={classes.container} >


        <Drop />
        {/* <FormControl style={{ minWidth: 120, marginLeft: '50px', marginTop: 10, marginBottom: 10 }}>
            <InputLabel >Age</InputLabel>
            <Select  
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}

        <Styles>
          {/* <Box className={classes.box}> */}
          <Box className={classes.list} >
            <Grid container spacing={3} >
              <Grid item xs={12} lg={4} sm={6} md={4}   >
                <Item variant='outlined' >
                  <Typography variant="subTitle">total pool size</Typography>
                  <Typography variant="h6">10K</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant='subTitle'>employees issued ESOP</Typography>
                  <Typography variant='h6'>4</Typography>
                </Item>
              </Grid>
              <Grid item lg={4} xs={12} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant='subTitle'>options used</Typography>
                  <Typography variant='h6'>2.7K</Typography>
                </Item>

              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant="subTitle">options exercised</Typography>
                  <Typography variant="h6">1000</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant="subTitle">options vested</Typography>
                  <Typography variant="h6">900</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant="subTitle">options unvested</Typography>
                  <Typography variant="h6">800</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined' >
                  <Typography variant="subTitle">options unused</Typography>
                  <Typography variant="h6">10K</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined'>
                  <Typography variant="subTitle">not-granted</Typography>
                  <Typography variant="h6">5K</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined'>
                  <Typography variant="subTitle">options surrendered</Typography>
                  <Typography variant="h6">1000</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined'>
                  <Typography variant="subTitle">options lapsed</Typography>
                  <Typography variant="h6">1200</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} lg={4} sm={6} md={4}>
                <Item variant='outlined'>
                  <Typography variant="subTitle">options buyback</Typography>
                  <Typography variant="h6">100</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.img}>
            <Chart />
          </Box>
        </Styles>
      </Container>




    </>


  );
}