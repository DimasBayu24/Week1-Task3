//3rd-answer

// Mean
function mean(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
      sum += parseFloat(score[i]);
    }
  
    return console.log("Mean: " + sum / score.length);
  }
  
  mean([10, 3, 1]);
  
  // Median
  function median(score) {
    let median = score.length / 2;
    for (let i = 0; i < score.length; i++) {
      if (score.length % 2 === 0) {
        // Data array genap
        return console.log("Median:", (score[median] + score[median - 1]) / 2);
      } else {
        // Data array ganjil
        return console.log("Median:", score[median - 0.5]);
      }
    }
  }
  
  median([8, 8, 10, 9]);
  
  // Modus
  function modus(score) {
    var frekuensi = 0;
    var greaterFrekuensi = 0;
    var modus = 0;
    for (var i = 0; i < score.length; i++) {
      for (var j = 0; j < score.length; j++) {
        if (score[i] === score[j] && i !== j) {
          frekuensi++;
        }
        if (frekuensi > greaterFrekuensi) {
          greaterFrekuensi = frekuensi;
          modus = i;
        }
      }
    }
  
    if (modus === 0) {
      return console.log("Modus: " + 0);
    }
  
    var angkaSama = 0;
    for (var k = 0; k < score.length; k++) {
      angkaSama += score[k];
      if (angkaSama / score.length === score[k]) {
        return console.log("Modus: Semua Angka Sama");
      }
    }
    return console.log("Modus: " + score[modus]);
    // you can only write your code here!
  }
  
  modus([10, 2, 4, 4, 4]);