import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebasekeys.databaseURL;

const getAllSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/positions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const demSnackPositions = response.data;
      const snackPositions = [];
      Object.keys(demSnackPositions).forEach((fbId) => {
        demSnackPositions[fbId].id = fbId;
        snackPositions.push(demSnackPositions[fbId]);
      });
      resolve(snackPositions);
    })
    .catch((error) => reject(error));
});

export default { getAllSnackPositionsByMachineId };