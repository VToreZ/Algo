function matrixElementsSum(matrix) {
  for (var j = 0, sum = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      sum += matrix[i][j];
      if (matrix[i][j] == 0) {
        break;
      }
    }
  }
  return sum;
}
console.log(matrixElementsSum([
 [0,1,1,2],
 [0,5,0,0],
 [2,10,3,3]]));
