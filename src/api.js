import axios from "axios";
import {ActionCreator} from "./reducer.js";

const configureAPI = (dispatch) => {

  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(ActionCreator.authorization(false));
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
