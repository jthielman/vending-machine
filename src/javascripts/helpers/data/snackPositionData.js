import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebasekeys.databaseURL;

const getAllSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snackpositions.json?orderBy="machineId"&equalTo="${machineId}"`)
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

const deleteSnackPosition = (snackPositionId) => axios.delete(`${baseUrl}/snackpositions/${snackPositionId}.json`);

export default { getAllSnackPositionsByMachineId, deleteSnackPosition };
