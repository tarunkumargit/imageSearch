import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6ADdwuMgvja7mDfut2c6bS15XYGV4cYVJXw-mKBwm0w',
  },
});
