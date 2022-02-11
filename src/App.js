import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import {useDispatch} from 'react-redux'
import React, { useEffect } from "react";
import { getShoes } from './actions/shoes';
import GoogleLogin from "react-google-login";
import { useState } from "react";
import axios from "axios";
import shoes from "./images/realergoat.png";
import Shoes from "./components/Shoes/Shoes";
import Form from "./components/Form/Form";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoes());
  }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          GoatKicks
        </Typography>
        <img className={classes.image} src={shoes} alt="shoes" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Shoes />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
