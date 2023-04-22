import axios from 'axios';
import { FAILURE } from './constants';

axios.defaults.baseURL = 'https://citizencarsbe.onrender.com/';
//axios.defaults.baseURL = 'http://localhost:8080/';

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

  getCar: (SrNo, onSuccess, onFailure) => {
    axios
      .post('/car', { SrNo: SrNo })
      .then((response) => {
        const responseValue = response.data;
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

  getCars: (onSuccess, onFailure) => {
    axios
      .get('/cars', {})
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

  uploadCars: (cars, onSuccess, onFailure) => {
    axios
      .post('/upload', cars)
      .then((response) => {
        const responseValue = response.data;
        //console.log(responseValue);
        if (responseValue.status === FAILURE) {
          onFailure && onFailure(responseValue);
        } else {
          onSuccess && onSuccess(responseValue);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export default DBService;
