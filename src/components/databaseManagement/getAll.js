import axios from 'axios';
import moment from 'moment';

const config = require('./config.json');

export default async function getAll(startId=0) {
    try {
        const response = await axios.get(`${config.api.invokeUrl}/posts/${startId}`);
        response.data.forEach(post => {
            const timestamp = moment.unix(post.time).fromNow();

            post['pfColor'] = ['red', 'green', 'blue', 'cyan'][Math.floor(Math.random() * 4)];
            post.time = timestamp;
        })
        console.log(response);
        return response.data;
    } catch(error) {
        console.log(`Unexpected error occurred getting: ${error}`);
        throw Error;
    }
}