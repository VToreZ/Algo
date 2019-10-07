var eqNumCounter;
function deleteNth(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    eqNumCounter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        eqNumCounter += 1;
        if (eqNumCounter > n) {
          arr.splice(j, 1);
          j -= 1;
        }
      }
    }
  }
  console.log(arr);
}

deleteNth([46, 44, 29, 46, 44, 29, 44, 46, 44, 29, 46, 46, 20, 46, 29, 20, 46, 46, 20, 44, 44, 44, 44, 46, 44, 29, 20, 44], 1);
