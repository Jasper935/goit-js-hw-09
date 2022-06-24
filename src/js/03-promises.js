import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
// const step = document.querySelector('[name="step"]')
// const amount = document.querySelector('[name="amount"]')

let obj = {}
form.addEventListener('input', onInput)
form.addEventListener('submit', onSubmit)
function onInput(evt) {
  obj[evt.target.name] = evt.target.value
}

function onSubmit(evt) {
  evt.preventDefault()
  let { amount, step, delay } = obj


  for (let i = 0; i < amount; i++) {
    let timeOut = Number(delay) + Number(step) * i

    createPromise(i, timeOut).then(value => {
      Notify.success(value);
    }).catch(value => {
      Notify.failure(value);
    })

  }



}

console.log(obj);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position + 1} in ${delay}ms`)
      } else {
        // Reject
        reject(`❌ Rejected promise ${position + 1} in ${delay}ms`)
      }

    }, delay);

  });


}

Notify.success(
  'Click Me',
  {
    timeout: 0,
  },
);
Notify.failure(
  'Click Me',
  {
    timeout: 0,
  }
)



// function onSubmit(evt) {
//   evt.preventDefault()
//  setTimeout(() => {
//   createPromise(obj['step'],(obj['amount'] * obj['step']))
//   console.log(obj);
//  }, obj['delay']); 

// }

// console.log(obj);



// function createPromise(step, amount) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     timerId = setInterval(() => Notify.success('Sol lucet omnibus'), step);
//     // clearInterval(timerId)
//       setTimeout(() => { clearInterval(timerId); console.log('stop'); },amount);
//   } else {
//     // Reject
//     timerId = setInterval(() => Notify.failure('Qui timide rogat docet negare'), step);
//     // clearInterval(timerId)
//       setTimeout(() => { clearInterval(timerId); console.log('stop'); },amount);
//   }
// }