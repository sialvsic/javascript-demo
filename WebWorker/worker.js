self.onmessage = function(event) {
   const jsonText = event.data;
   const jsonData = JSON.parse(jsonText);

   self.postMessage(jsonData);
};
