const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length < 2) {
    return array;
  }
  
  // Split Array in into right and left
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(L, R){
  const sortedArray = [];
  let sortedIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < L.length && rightIndex < R.length) {
    if(L[leftIndex] <= R[rightIndex]) {
      sortedArray[sortedIndex] = L[leftIndex];
      leftIndex++;
    } else {
      sortedArray[sortedIndex] = R[rightIndex];
      rightIndex++;
    }
    sortedIndex++;
  }

  // Copy rest of whichever array remains
  while (leftIndex < L.length) {
    sortedArray[sortedIndex] = L[leftIndex]; 
    leftIndex++;
    sortedIndex++;
  }
  while (rightIndex < R.length) {
    sortedArray[sortedIndex] = R[rightIndex];
    rightIndex++;
    sortedIndex++;
  }

  return sortedArray;
}


const answer = mergeSort(numbers);
console.log(answer);