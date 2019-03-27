// import { BaseUrl } from './baseUrl';

const GetData={
  Myfetch:function(callback) {
        fetch("/v2/movie/in_theaters", { 'mode': 'no-cors' }).then(res => {
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