import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000000",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "#ffffff",
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
