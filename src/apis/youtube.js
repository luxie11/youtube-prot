import  axios from 'axios';

const KEY = 'ENTER_YOUTUBE_API_KEY'; 

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})
