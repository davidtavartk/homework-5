let countdownValue = 10;
const gradients = [
  'linear-gradient(180deg, #FF5733 0%, #FF33F6 100%)',
  'linear-gradient(180deg, #33FF57 0%, #3357FF 100%)',
  'linear-gradient(180deg, #F3FF33 0%, #FF5733 100%)',
  'linear-gradient(180deg, #FF33F6 0%, #BB36F6 100%)',
  'linear-gradient(180deg, #AF33F6 0%, #6943FF 100%)',
  'linear-gradient(180deg, #33C4F6 0%, #2F2CE9 100%)',
  'linear-gradient(180deg, #F3F333 0%, #C2D3F6 100%)'
];

const leftContentContainer = document.querySelector('.left-content-container');
let originalGradient = leftContentContainer.style.background;
let lastGradientIndex = -1;

function changeBackgroundGradient() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * gradients.length);
  } while (randomIndex === lastGradientIndex);

  lastGradientIndex = randomIndex;
  leftContentContainer.style.background = gradients[randomIndex];
}

const countdownInterval = setInterval(() => {
  changeBackgroundGradient();

  if (countdownValue === 1) {
    clearInterval(countdownInterval);

    setTimeout(() => {
      console.log("Finished!");
      leftContentContainer.style.background = originalGradient;
    }, 2000);
  }

  countdownValue--;
}, 1000);
