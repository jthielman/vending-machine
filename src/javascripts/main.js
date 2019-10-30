import firebase from 'firebase';

import apiKeys from './helpers/apiKeys';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebasekeys);
  console.log('ho there!', firebase.apps);
};

init();
