import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 600,
        margin:'30px auto auto auto'
    },
    media: {
        height: 500,
        width: 600,

    },
};

const MovieDisplay = (props) => {
    const { item, classes } = props;
    return (
            <Card className={classes.card} raised={true}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.images.large}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography component="h3">
                        Dirctor: 
                        {item.directors.map((director) => {
                            return (<div key={director.name_en}><span>{director.name_en},</span></div>)
                        })}
                    </Typography>
                    <Typography component="h3">
                        Casts: 
                        {item.casts.map((cast) => {
                            return (<div key={cast.name_en}><span>{cast.name_en}</span></div>)
                        })}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
       
        
    );

}

MovieDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDisplay);