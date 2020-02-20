function average(scores) {
  var total = 0;
  scores.forEach(function(score) {
    total += score;
  });
  var avg = total / scores.length;
  console.log(Math.round(avg)); 
}

var scores = [1,2,3,4]
average(scores);
