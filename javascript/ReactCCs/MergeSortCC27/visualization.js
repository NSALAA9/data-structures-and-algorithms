// visualization.js
const mergeSort = require('./MergeSort');

function visualizeMergeSort(arr) {
  console.log("Original Array:", arr);
  console.log("Sorting Process:");

  const steps = [];

  function recordStep() {
    steps.push([...arr]);
  }

  mergeSort(arr);
  recordStep();

  for (let step = 0; step < steps.length; step++) {
    console.log("Step", step + 1, ":", steps[step]);
  }
}

// Test case
const sampleArray = [8, 4, 23, 42, 16, 15];
visualizeMergeSort(sampleArray);
