import axios from 'axios';
const Base_Url = 'https://api.douban.com';
const Popular_Items = '/v2/movie/in_theaters';
const APIKey = "0b2bdeda43b5688921839c8ecb20399b";

const RestAPI = {

    getData: function (url, method, callback) {
        const Query = Base_Url + Popular_Items + '?apikey=' + APIKey;
        axios.get(Query)
            // axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
            .then(res => {
                console.log(res.json());
                return res.json();
            });
    }

}

export default RestAPI;