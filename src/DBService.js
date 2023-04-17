import axios from 'axios';

axios.defaults.baseURL = 'https://citizencarsbe.onrender.com/';
const SUCCESS = 'success';
const FAILURE = 'failure';

const DBService = {
  authenticate: (username, password, onSuccess, onFailure) => {
    axios
      .post('/login', { username, password })
      .then((response) => {
        const responseValue = response.data;
        //console.log(responseValue);
        if (responseValue.status === FAILURE) {
          onFailure && onFailure(responseValue.data);
        } else {
          onSuccess && onSuccess(responseValue.data);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  register: (name, phone, username, password, onSuccess, onFailure) => {
    axios
      .post('/register', { name, phone, username, password })
      .then((response) => {
        const responseValue = response.data;
        //console.log(responseValue);
        if (responseValue.status === FAILURE) {
          onFailure && onFailure(responseValue.data);
        } else {
          onSuccess && onSuccess(responseValue.data);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export default DBService;
