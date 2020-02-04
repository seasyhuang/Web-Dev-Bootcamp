var times = [
  // "24min",
  // "27min",
  // "59min",
  // "1hr 12min",
  // "1hr 40min",
  // "1hr 26min",
  // "2hr",
  // "1hr 16min",
  // "2hr 10min",
  // "56min",
  // "1hr 22min",
  // "1hr",
  // "1hr 40min",
  // "46min",
  // "1hr 16min",    // 15: dom manip
  "1hr 16min",
  "1hr 48min",
  "1hr 9min",
  "35min",
  "1hr 16min",
  "1hr 11min",
  "1hr 1min",
  "37min",
  "58min",
  "1hr 13min",
  "1hr 14min",
  "1hr 34min",
  "58min",
  "54min",
  "42min",
  "1hr 57min",
  "39min",
  "1hr 17min",
  "59min",
  "40min",
  "44min",
  "1hr 25min",
  "1hr 20min",
  "52min",
  "1hr 11min",
  "1hr 3min", ]

function addTimes(array) {
  var finalTime = 0;
  for (var i = 0; i < array.length; i++) {
    mystring = array[i];
    var fmin = 0;
    if (mystring.includes("hr")) {
      hr = mystring.slice(0,mystring.indexOf("hr"));
      fmin += parseInt(hr) * 60;
      mystring = mystring.slice(mystring.indexOf("hr")+3, mystring.length);
    }
    // console.log(mystring);
    if (mystring.includes("min")) {
      min = mystring.slice(0,mystring.indexOf("min"));
      fmin += parseInt(min);
    }
    finalTime += parseInt(fmin);
  }
  return finalTime;
}

var ft = addTimes(times) / 60;
console.log(ft + " hours");
