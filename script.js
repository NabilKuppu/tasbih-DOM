// const DsubhanAllahisplay = document.getElementById("subhanAllahDisplay");
// const subhanAllahIncrimentBtn = document.getElementById(
//   "subhanAllahIncrimentBtn"
// );
// const subhanAllahDecrimentBtn = document.getElementById(
//   "subhanAllahDecrimentBtn"
// );
// const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
// const alhamdulillahIncrimentBtn = document.getElementById(
//   "alhamdulillahIncrimentBtn"
// );
// const alhamdulillahDecrimentBtn = document.getElementById(
//   "alhamdulillahDecrimentBtn"
// );
// const allahAkberDisplay = document.getElementById("allahAkberDisplay");
// const allahAkberIncrimentBtn = document.getElementById(
//   "allahAkberIncrimentBtn"
// );
// const allahAkberDecrimentBtn = document.getElementById(
//   "allahAkberDecrimentBtn"
// );
// const resetBtn = document.getElementById("resetBtn");

// //Common FUnction
// let count = 0;

// //Increment
// const increment = (display) => {
//   return () => {
//     if (count === 33) {
//       return alert(`Your Subhanallah is done`);
//     }
//     count += 1;

//     display.innerText = count;
//   };
// };
// //reset
// function reset(display) {
//   return (display.innerText = 0);
// }
// //Decrement
// const decrement = (display) => {
//   return function () {
//     if (count < 1) {
//       return alert(`Subhanallah Cann't be negative`);
//     }
//     count -= 1;

//     display.innerText = count;
//   };
// };
// //Subhanallah
// subhanAllahIncrimentBtn.addEventListener(
//   "click",
//   increment(subhanAllahDisplay)
// );

// subhanAllahDecrimentBtn.addEventListener(
//   "click",
//   decrement(subhanAllahDisplay)
// );

// //Alhamdulillah
// alhamdulillahIncrimentBtn.addEventListener(
//   "click",
//   increment(alhamdulillahDisplay)
// );

// alhamdulillahDecrimentBtn.addEventListener(
//   "click",
//   decrement(alhamdulillahDisplay)
// );
// //AllahuAkbar
// allahAkberIncrimentBtn.addEventListener("click", increment(allahAkberDisplay));
// allahAkberDecrimentBtn.addEventListener("click", decrement(allahAkberDisplay));

// //
// resetBtn.addEventListener("click", function () {
//   reset(subhanAllahDisplay);
//   reset(alhamdulillahDisplay);
//   reset(allahAkberDisplay);
//   count = 0;
// });
const elements = {
  subhanAllah: {
    display: document.getElementById("subhanAllahDisplay"),
    incrementBtn: document.getElementById("subhanAllahIncrimentBtn"),
    decrementBtn: document.getElementById("subhanAllahDecrimentBtn"),
  },
  alhamdulillah: {
    display: document.getElementById("alhamdulillahDisplay"),
    incrementBtn: document.getElementById("alhamdulillahIncrimentBtn"),
    decrementBtn: document.getElementById("alhamdulillahDecrimentBtn"),
  },
  allahAkber: {
    display: document.getElementById("allahAkberDisplay"),
    incrementBtn: document.getElementById("allahAkberIncrimentBtn"),
    decrementBtn: document.getElementById("allahAkberDecrimentBtn"),
  },
};

let counts = {
  subhanAllah: 0,
  alhamdulillah: 0,
  allahAkber: 0,
};

const updateDisplay = (key) => {
  elements[key].display.innerText = counts[key];
};

const increment = (key) => () => {
  if (counts[key] === 33) {
    return alert(`Your ${key} is done`);
  }
  counts[key] += 1;
  updateDisplay(key);
};

const decrement = (key) => () => {
  if (counts[key] < 1) {
    return alert(`${key} can't be negative`);
  }
  counts[key] -= 1;
  updateDisplay(key);
};

const reset = (key) => () => {
  elements[key].display.innerText = 0;
  counts[key] = 0;
};

for (const key in elements) {
  elements[key].incrementBtn.addEventListener("click", increment(key));
  elements[key].decrementBtn.addEventListener("click", decrement(key));
}

resetBtn.addEventListener("click", () => {
  for (const key in elements) {
    console.log(key);
    reset(key)();
  }
});

// const updateDisplay = (key) => {
//   elements[key].display.innerText = counts[key];
// };

// const increment = (key) => {
//   if (counts[key] === 30) {
//     return alert(`Your ${key} have done Your Work`);
//   }
//   counts[key] += 1;
//   updateDisplay(key);
// };
// const decrement = (key) => {
//   if (counts[key] < 1) {
//     return alert(`${key} cannot be negative`);
//   }
//   counts[key] -= 1;
//   updateDisplay(key);
// };
// for (const key in elements) {
//   elements[key].incrementBtn.addEventListener("click", increment(key));
//   elements[key].decrementBtn.addEventListener("click", decrement(key));
// }
