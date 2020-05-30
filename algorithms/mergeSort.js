const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  console.log(array);
  if (array.length === 1) {
    return array
  }
  
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(L, R){
  let nR = R.length;
  let nL = L.length;
  let i = 0;
  let j = 0;
  let k = 0;
  let A = [];

  while (i < nL && j < nR) {
    if( L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
    k++;
  }

  // when one side is finished, add all elements from remaining side
  // (only one of these while loops will execute)
  while (i < nL) {
    A[k] = L[i]; 
    i++;
    k++;
  }
  while (j < nR) {
    A[k] = R[j];
    j++;
    k++;
  }
}


const answer = mergeSort(numbers);
console.log(answer);