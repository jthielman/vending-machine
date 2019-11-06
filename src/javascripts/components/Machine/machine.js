import $ from 'jquery';
import smash from '../../helpers/data/smash';
import snacks from '../Snacks/snacks';

import './machine.scss';
import utilities from '../../helpers/utilities';
import snackData from '../../helpers/data/snackData';

const buySnack = (e) => {
  e.stopImmediatePropagation();
  const snackId = e.target.id.split('buy-')[1];
  snackData.buySnack(snackId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildTheMachine())
    .catch((error) => console.error(error));
};

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snacks.buildSnackCard(position);
      });
      domString += '</div>';
      utilities.printToDom('machine', domString);
      $('#machine').on('click', '.buy-snack', buySnack);
      // Build a dom string
      // h2 that says VENDING MACHINE
      // div with an id = snack-section, class=d-flex flex-wrap
      // forEach over positions - call a component called snacks
      // snacks component should return a bootstrap card
      // printToDom('stock', domString)
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
