import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-grdient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.3) 100%)'
    }
})

const MovieList = (props) => {
    const { handleMovie,movies,classes } = props;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {movies.map(tile => (
                    <GridListTile key={tile.id} onClick={()=>handleMovie(tile)}>
                        <img src={tile.images.medium} alt={tile.id} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: styles.titleBar,
                                title: styles.title,
                            }}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

MovieList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
// export default MovieList;
  export default withStyles(styles)(MovieList);
