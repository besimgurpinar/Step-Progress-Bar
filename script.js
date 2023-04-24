const steps = document.querySelectorAll(".step");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const progressIndicator = document.querySelector(".step-progress-bar-indicator");

let currentStep = 1;

function updateStepIndicator(step) {
  progressIndicator.style.width = `${(step - 1) * 20}%`;
}

function updateStepStatus(step, active) {
  const stepElement = document.querySelector(`.step[data-step="${step}"]`);
  if (active) {
    stepElement.classList.add("active");
    stepElement.classList.remove("inactive");
  } else {
    stepElement.classList.remove("active");
    stepElement.classList.add("inactive");
  }
}

function updateButtonsStatus(step) {
  if (step === 1) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (step === steps.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function updateStep(step) {
  updateStepStatus(currentStep, false);
  updateStepStatus(step, true);
  updateStepIndicator(step);
  updateButtonsStatus(step);
  currentStep = step;
}

previousButton.addEventListener("click", () => {
  if (currentStep > 1) {
    updateStep(currentStep - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentStep < steps.length) {
    updateStep(currentStep + 1);
  }
});

updateStep(currentStep);
