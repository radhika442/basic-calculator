const display = document.getElementById('display');
const resultDiv = document.getElementById('live-result');
let memory = 0;

// Append value to display
function appendValue(val) {
  display.value += val;
  updateLiveResult();
}

// Clear display
function clearDisplay() {
  display.value = '';
  resultDiv.textContent = '';
}

// Calculate result using math.js
function calculate() {
  try {
    const result = math.evaluate(display.value);
    display.value = result;
    resultDiv.textContent = '';
  } catch (e) {
    resultDiv.textContent = 'Invalid Expression';
  }
}

// Live result
function updateLiveResult() {
  try {
    const result = math.evaluate(display.value);
    resultDiv.textContent = "= " + result;
  } catch {
    resultDiv.textContent = '';
  }
}

// Memory functions
function memoryAdd() {
  try {
    memory = math.evaluate(display.value);
  } catch {
    memory = 0;
  }
}

function memoryRecall() {
  display.value += memory;
  updateLiveResult();
}

function memoryClear() {
  memory = 0;
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  display.addEventListener('input', updateLiveResult);
};

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[\d+\-*/().^!]/.test(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
    updateLiveResult();
  }
});
