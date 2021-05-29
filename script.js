// let btn = document.querySelector('button');


// document.querySelector('button').onclick = function play(e) {
//    let key = e.target;
//    let note = document.getElementById(key.dataset.note)
//    // document.getElementById(key.dataset.note).play()
//    note.play()
// }


// window.onkeydown = function myFunc(e) {
//    console.log(e.key);
//    if (e.key == '2') {
//       console.log('2');
//    }
// }

let body = document.querySelector('body');
let bodyc = document.querySelector('.container');
let gimn = document.querySelector('#gimn');

document.onkeydown = (e) => {
   if (e.key == '1') {
      gimn.play();
   } else if (e.key == '`') {
      gimn.pause();
   }
    else if (e.key == '2') {
      body.style.backgroundColor = 'yellow';
   } else if (e.key == '3') {
      body.style.backgroundColor = 'blue';
   } else if (e.key == '4') {
      bodyc.classList.toggle('flag')
   } else if (e.key == '5') {
      bodyc.classList.toggle('flagreverse')
   } else {
      return true;
   }
};





