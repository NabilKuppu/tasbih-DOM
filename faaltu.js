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
