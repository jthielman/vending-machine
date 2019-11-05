import './snacks.scss';

const buildSnackCard = (pos) => {
  // console.log(pos);
  const currentSnack = pos.snack;
  let string = '';
  if (currentSnack.name) {
    string += `
    <div class="card">
    <img src="${currentSnack.imageUrl}" class="card-img-top" alt="${currentSnack.name}">
    <div class="card-body">
    <h5 class="card-title">${currentSnack.name}</h5>
    <p class="card-text">$${(currentSnack.price / 100).toFixed(2)}</p>
    <p class="card-text">${pos.position}</p>
    </div>
    </div>
    `;
  } else {
    string += `<div class="card">
    <h5 class="card-title">EMPTY</h5>
    <p class="card-text">${pos.position}</p>
    </div>
    </div>`;
  }
  return string;
};

export default { buildSnackCard };
