import './snacks.scss';

const buildSnackCard = (pos) => {
  // console.log(pos);
  const currentSnack = pos.snack;
  let string = '';
  if (currentSnack.name) {
    string += `
    <div class="card col-4">
      <img src="${currentSnack.imageUrl}" class="card-img-top" alt="${currentSnack.name}">
      <div class="card-body">
        <h5 class="card-title">${currentSnack.name}</h5>
        <p class="card-text">$${(currentSnack.price / 100).toFixed(2)}</p>
        <p class="card-text">${pos.snack.currentStocked} available</p>
      </div>
      <div class="card-footer"><button class="btn btn-info buy-snack ${pos.snack.currentStocked < 1 ? 'disabled' : ''}" id="buy-${pos.snack.id}">Purchase ${pos.position}</button></div>
    </div>
    `;
  } else {
    string += `
    <div class="card col-4">
      <h5 class="card-title">EMPTY</h5>
    <div class="card-body">
      <p class="card-text">${pos.position}</p>
    </div>
    <div class="card-footer">${pos.position}</div>
    </div>`;
  }
  return string;
};

export default { buildSnackCard };
