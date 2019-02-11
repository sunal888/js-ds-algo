function insertionSort(arr){
    if (arr.length <= 1) return arr;
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([])); // []
console.log(insertionSort([3])); // [3]
console.log(insertionSort([4,3,2,1])); // [1,2,3,4]
console.log(insertionSort([3,1,4,2])); // [1,2,3,4]