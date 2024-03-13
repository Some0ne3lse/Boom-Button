let number = 1;

const numberTag = document.getElementById('number');

const list = document.getElementById('boom-list');


const onIncrementClick = () => {
  number = number * 5;
  numberTag.textContent = number;
  if (number > (5 / (5 ** 35)) && number <= 1)
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  if (number === (5 ** 35)) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  }
}


const onDecrementClick = () => {
  number = number / 5;
  numberTag.textContent = number;
  if (number < (5 ** 35) && number >= 2)
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  if (number <= (5 / (5 ** 35))) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  }
}

// const onDecrementClick = () => {
//   number = number / 5;
//   numberTag.textContent = number;
//   if (number <= (5 / (5 ** 35))) {
//     boomTag.textContent = '!bOoMm!'
//   } else {
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].value === 'Boom') {
//         data.splice(i--, 1)
//       }
//     }
//   }
// }