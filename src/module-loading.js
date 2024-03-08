const { DeterminateBar } = require('node-loading');
const loading = DeterminateBar();
loading.start();
loading.message = 'Doing something nice...';

let progress = 0;
const intervalId = setInterval(() => {
  loading.setProgress(++progress);

  if (progress === 50) loading.message = 'Calculating things...';

  if (progress === 100) {
    loading.stop();
    clearInterval(intervalId);
  }
}, 100);
