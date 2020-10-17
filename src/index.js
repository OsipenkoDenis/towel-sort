
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!(Array.isArray(matrix))){
    return [];
  }

  for(let i = 1; i < matrix.length; i+=2){
    matrix[i].reverse();
  };
  
  var arr = [];
for(let subMatrix of matrix){
  for(let elem of subMatrix){
    arr.push(elem);
  }
}
  return arr;
}
