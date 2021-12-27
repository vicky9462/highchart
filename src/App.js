import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, FormControl, Typography, InputLabel, Select, MenuItem, Grid } from '@mui/material';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  container: {
    backgroundColor: "skyblue",
    borderRadius: 15,


  },
  grid: {
    padding: "2px",
    border: "2px solid white",
    borderRadius: 10,
    spacing: 10,

  },
  
  tty:{
display:'flex',
flexDirection:'row',
  },
  img:{
    height:'40vh',
    // width:'100px'

  },
})
export default function FixedContainer() {
  const classes = useStyles()
  return (

    <>
      <Container className={classes.container}>
      <Box style={{ maxWidth: "70%" }}>
          <FormControl style={{ minWidth: 120, marginLeft: '50px', marginTop: 20 }}>
            <InputLabel >Age</InputLabel>
            <Select
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </Box>
<Box className={classes.tty}>
       



          <Box spacing={1} >
            <Grid container p={5}  >
              <Grid item spacing={3} className={classes.grid} p={2} xs={12} sm={6} md={4} >
                <Typography variant='subTitle'>total pool size</Typography>
                <Typography variant='h5'>10K</Typography>
              </Grid>

              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>employees issued ESOP</Typography>
                <Typography variant='h5'>4</Typography>
              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options used</Typography>
                <Typography variant='h5'>2.7K</Typography>

              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options exercised</Typography>
                <Typography variant='h5'>1000</Typography>

              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options vested</Typography>
                <Typography variant='h5'>900</Typography>

              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options unvested</Typography>
                <Typography variant='h5'>800</Typography>

              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4} >
                <Typography variant='subTitle'>options unused</Typography>
                <Typography variant='h5'>10K</Typography>
              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}
              >
                <Typography variant='subTitle'>not-granted</Typography>
                <Typography variant='h5'>5K</Typography>
              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options surrendered</Typography>
                <Typography variant='h5'>1000</Typography>
              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options lapsed</Typography>
                <Typography variant='h5'>1200</Typography>

              </Grid>
              <Grid item className={classes.grid} p={2} xs={12} sm={6} md={4}>
                <Typography variant='subTitle'>options buyback</Typography>
                <Typography variant='h5'>100</Typography>
              </Grid>
            </Grid>
          </Box>
        

        <Box style={{ Width: "30%" }} className={classes.img}>
          <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          />
        </Box>
</Box>




      </Container>
    </>
  );
}