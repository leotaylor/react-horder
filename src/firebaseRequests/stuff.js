import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/things.json`)
      .then(res => {
        const things = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            things.push(res.data[fbKey]);
          });
        }
        resolve(things);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest };
