const imageComparisons = document.querySelectorAll('.image-comparison');

imageComparisons.forEach((container) => {
  const slider = container.querySelector('.slider');
  const beforeImage = container.querySelector('.before-image');
  const sliderLine = container.querySelector('.slider-line');
  const sliderIcon = container.querySelector('.slider-icon');

  // Add input event listener to the slider
  slider.addEventListener('input', (e) => {
    let sliderValue = e.target.value + "%";

    // Adjust the width of the before image and position of the slider line/icon
    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
  });
});