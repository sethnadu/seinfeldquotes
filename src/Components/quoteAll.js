import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: "500px",
    backgroundColor: "#fcd720",
    margin: "0 40px 40px 40px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.6rem",
    color: "#e22121",
  },
  pos: {
    marginBottom: 12,
  },
  changeFont: {
    fontSize: "1rem",
  },
});

const QuoteAll = props => {
  console.log(props);
  const classes = useStyles();

  return (
    <>
      {console.log(props)}
      {props.noStateApiAll !== true && 
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.allQuote.author}
                </Typography>
                <Typography variant="h5" component="h2">
                  "{props.allQuote.quote}"
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.changeFont}
                >
                  Season: <span className={classes.title}>{props.allQuote.season}</span>
                  {"     "}
                  Episode: <span className={classes.title}>{props.allQuote.episode}</span>
                </Typography>
              </CardContent>
              <CardActions />
            </Card>
      }
    </>
  );
};

export default QuoteAll;
