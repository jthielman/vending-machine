import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/MyNavbar/myNavbar';

import apiKeys from './helpers/apiKeys';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebasekeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
