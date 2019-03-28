import React, {Component} from 'react';
import GetData from '../api/myFetch';
import MovieList from './movieList';
import MovieDisplay from './movieDisplay';


class Contents extends Component{
    state = {
        movie:'',
        data: [],
        isDisplay:false
    }

    componentDidMount() {
        GetData.Myfetch(this.loadMovies);
    }
    
    loadMovies = (response) => {
        if (response.length > 0) {
            this.setState({
                data:response
            })
        }
        // console.log(this.state.data);
    }

    displayDetails = (movie) => {
        movie && this.setState(() => ({
            isDisplay: true,
            movie: movie
        }));
        // console.log(this.state.movie)
    }
    render() {
        
        const { data, isDisplay, movie } = this.state;
        
        return (
            <div>
                <div>
                    <h2>This is contents</h2>
                    <MovieList movies={data} handleMovie={this.displayDetails} />
                </div>
                {
                    isDisplay&&<div style={{margin:'30px auto',padding:"0",alignItems:'center',width:'100%'}}><MovieDisplay item={movie}/></div>
                }
            </div>
           
        )
    }
}

export default Contents;