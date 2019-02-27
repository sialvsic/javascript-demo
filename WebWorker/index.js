var worker =  new Worker('./worker.js');

worker.onmessage = function(event) {
  const jsonData = event.data;

  //Do something with Parsed data
};


worker.postMessage(jsonText);


