import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Button from "../Button/Button";
import usePosts from "../../hooks/usePosts";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Post({ post }) {
  const classes = useStyles();
  const { deletePost } = usePosts();
  const { title, body } = post;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="text">
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          variant="text"
          to={`/posts/${post.id}`}
        >
          Learn More
        </Button>
        <Button
          size="small"
          color="primary"
          variant="text"
          onClick={() => deletePost(post)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
