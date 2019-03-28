import React from 'react';

const MovieDisplay = (props) => {
    const { movie } = props;
    return (
        <div>
            {
                console.log(movie)
            }
        </div>
    )
}

export default MovieDisplay;