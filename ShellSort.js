function shellSort(array) {
    let size = array.length;
    let gapSize = Math.floor((size) / 2);
    while (gapSize > 0) {
        /////////////////////////////////////////
        for (h = 0; h < gapSize; h++) { 
            for (i = gapSize; i < size; i = gapSize + i) {
                let temp = array[i];
                for (j = i - gapSize; j >= 0 && array[j] > temp; j = j - gapSize) {
                    array[j + gapSize] = array[j];
                }
                array[j + gapSize] = temp;
            }
        }
        /////////////////////////////////////////
        gapSize = Math.floor(gapSize / 2)
    }
    return array;
};
console.log(shellSort([-8, -5, 3, 7, 4, 0, -1, 1, -4, 7, 3, 9]));

/*function shellSort1(arr) {
    var increment = parseInt(arr.length / 2);

    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}
//console.log(shellSort1([3, 0, 2, 5, -1, 4, 1,8,90,56,78]));*/