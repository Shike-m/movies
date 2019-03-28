// import { BaseUrl } from './baseUrl';

const GetData={
  Myfetch:function(callback) {
        fetch("/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b").then(res => {
            return res.json();
        }).then(res => {
            // console.log(res.subjects)
            callback(res.subjects);
        }).catch(err => {
            console.log(err);
        })
    }
} 

export default GetData;