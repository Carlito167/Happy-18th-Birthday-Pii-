const resultInput = document.getElementById('result');

function appendValue(value) {
  resultInput.value += value;
}

function calculate() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = 'HAPPY BIRTHDAY 18th PII 🎂🎉🎈';
  } catch (error) {
    resultInput.value = 'May crinkles ka d sa akon😊😘';
  }
}

function clearInput() {
  resultInput.value = '';
}
function deleteLast() {
            resultInput.value = resultInput.value.slice(0,-1);
        }
function audio(play) {
}