let array = [5,23,123,32,4,235,3,21,321,4,7]

bubbleSort = array => {

    for (const num of array) {
        for (let i = 0; i < array.length - 1; i ++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
            }
        }
    };

    return array;
};

console.log(bubbleSort(array));