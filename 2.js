//2nd-answer

let array= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


function check(index) {
    var hasil = [];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < index.length; j++) {
        if (i == j && index[j] == true) {
          hasil.push(array[i]);
        }
        // if (i == j && index[j] == undefined){
        //     hasil.push(array["NotBolean"]);
        // }
      }
    }
    return `${hasil}`;
  }
  console.log(
    check([true, false, true, false, true, true, false, true])
  );
  console.log(check([0, 0, 0, 0, 0, 0, true]));


//   let array= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//     function command (perintah,indexof) {
//         array.indexOf[indexof];
//         if (perintah == true){
//             return console.log(array[indexof]);
//         }
//         else {
//             console.log("perintah tidak keluar");
//         }
//     }

//     command(true,5);