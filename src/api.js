import axios from 'axios';
import {
    UNSPLASH_API,
    UNSPLASH_ACCESS_KEY,
    UNSPLASH_SECRET_KEY
} from './constants'

const searchImages = async(term) => {
    const response = await axios.get(`${UNSPLASH_API}`, {
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` 
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImages;