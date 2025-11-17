const root = document.documentElement;
const inputs = document.querySelectorAll('[data-prop]');
const outputMap = new Map();

for (const output of document.querySelectorAll('output[for]')) {
  outputMap.set(output.getAttribute('for'), output);
}

const readouts = document.querySelectorAll('[data-readout]');

const formatValue = (input) => {
  const value = parseFloat(input.value);
  switch (input.dataset.format) {
    case 'degrees':
      return `${Math.round(value)}°`;
    case 'percent':
      return `${Math.round(value * 100)}%`;
    case 'pixels':
      return `${Math.round(value)}px`;
    case 'refraction':
      return (1.3 + value / 100).toFixed(2);
    default:
      return value.toString();
  }
};

const applyValue = (input) => {
  const prop = input.dataset.prop;
  if (!prop) return;
  let appliedValue = input.value;
  if (input.type === 'checkbox') {
    appliedValue = input.checked ? '1' : '0';
  }
  root.style.setProperty(prop, appliedValue);

  const formatted = formatValue(input);
  const output = outputMap.get(input.id);
  if (output) {
    output.textContent = formatted;
  }

  readouts.forEach((node) => {
    if (node.dataset.readout === input.id) {
      if (input.dataset.format === 'refraction') {
        node.textContent = formatted;
      } else {
        node.textContent = formatted;
      }
    }
  });
};

inputs.forEach((input) => {
  applyValue(input);
  input.addEventListener('input', () => applyValue(input));
});
