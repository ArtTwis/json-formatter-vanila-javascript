const inputArea = document.querySelector('.large-area--input');

const outputArea = document.querySelector('.large-area--output');

const formatButton = document.querySelector('.controls_button--format');

const minifyButton = document.querySelector('.controls_button--minify');

formatButton.addEventListener('click', () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
  outputArea.value = formatted;
});

minifyButton.addEventListener('click', () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));
  outputArea.value = minified;
});
