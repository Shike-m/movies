import axios from 'axios';

function RestAPI() {
    axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(res => {
            console.log(res.json());
            return res.json();
        });
}

export default RestAPI;