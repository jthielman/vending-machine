import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-button-logout');
const stockDiv = $('#stock');

const logoutEvent = () => {
  logoutButton.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        authDiv.addClass('hide');
        logoutButton.addClass('hide');
        stockDiv.addClass('hide');
      }).catch((err) => console.error('you still logged in', err));
  });
};

export default { logoutEvent };
