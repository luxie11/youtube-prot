import  axios from 'axios';

const KEY = 'AIzaSyB8KkFTcKh9I31lt-LFUyLNN7CdFgCS-Fc'; 

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})