import React, {Component} from 'react';
import GetData from '../api/myFetch';


class Contents extends Component{
    state={
        data:[]
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
        console.log(this.state.data);
    }
    render(){
        // const {data}=this.state;
        return (
            <div>
                <div><h2>This is contents</h2></div>
               
            </div>
           
        )
    }
}

export default Contents;