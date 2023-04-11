import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
    width: "130",
    height: "130",
  },
}));

export default function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Card>
        <CardMedia className={classes.cardMedia} image={image}></CardMedia>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
