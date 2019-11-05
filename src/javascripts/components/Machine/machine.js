import smash from '../../helpers/data/smash';
import snacks from '../Snacks/snacks';

import './machine.scss';
import utilities from '../../helpers/utilities';

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
