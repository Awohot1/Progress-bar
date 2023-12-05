const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const actives = document.querySelectorAll(".active");
let currActive = 0;

function updateActive() {
  circles.forEach((circle, index) => {
    if (index <= currActive) {
      circle.classList.add("active");
      return;
    }
    if (index >= currActive) {
      circle.classList.remove("active");
      return;
    }
  });
  checkPosition();
  const progressLength = Math.trunc((currActive / (circles.length - 1)) * 100);
  progressBar.style.width = `${progressLength}%`;
}
function checkPosition() {
  // when at first prev btn is disabled
  if (currActive === 0) {
    prevBtn.disabled = true;
  }
  // when at last next btn is disabled
  else if (currActive === circles.length - 1) {
    nextBtn.disabled = true;
  } else if (currActive > 0) {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

// when next is pressed no of active class increases
nextBtn.addEventListener("click", () => {
  currActive++;
  if (currActive > circles.length - 1) {
    currActive = circles.length - 1;
  }
  updateActive();
});
// when prev is pressed no of active class decreases
prevBtn.addEventListener("click", () => {
  currActive--;
  if (currActive < 1) {
    currActive = 0;
  }
  updateActive();
});
