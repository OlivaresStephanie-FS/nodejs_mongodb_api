import axios from 'axios';
const API = {};

API.fetchArtists = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/artists');
    console.log('>>>', response);
    return response
};

// API.findArtist = async (artist) => {
//     const response = await axios.post(
//         'http://localhost:3000/api/v1/artists',
//         artist
//     );
//     console.log('>>>', response);
// }

export default API;