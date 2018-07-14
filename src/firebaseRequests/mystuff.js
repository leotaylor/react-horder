import axios from 'axios';
import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const orders = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            orders.push(res.data[fbKey]);
          });
        }
        resolve(orders);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (newThing) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myStuff.json`, newThing)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteRequest = (myPrecious) => {
  return new Promise ((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/myStuff/${myPrecious}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest, deleteRequest };
