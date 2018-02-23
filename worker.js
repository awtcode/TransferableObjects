setInterval(()=> {
  var ab = new ArrayBuffer(10000000);
  // Using Transferable Objects crashes Chrome but works on Firefox
  postMessage(ab, [ab]);
  //postMessage(ab);
},100);
