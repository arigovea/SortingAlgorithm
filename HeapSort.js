//Heap
const array = [10,4,8,5,12,2,6,11,3,9,7,1];
let size = array.length;
function HeapSort(array, i, size) {
    if (i >= size) {
        return array;
    }
    for (j = i; j >= 0; j--) {
        let left = j * 2 + 1;
        let right = j * 2 + 2;
        let root = j;
        if (array[left] > array[root] && left < size) {
            let temp = array[left];
            array[left] = array[root];
            array[root] = temp;
        }

        if (array[right] > array[root] && right < size) {
            let temp = array[right];
            array[right] = array[root];
            array[root] = temp;
        }
    }
    return HeapSort(array, ++i, size);
}
HeapSort(array, 0,size);
function HeapSortPart2(array, m, size) {
    if (size <= 1) {
        return array;
    }
    if (array[m] > array[size - 1]) {
        let max = array[m];
        array[m] = array[size - 1];
        array[size - 1] = max;
    }
        HeapSort(array, 0, size-1);

        return HeapSortPart2(array, m, --size)
}
console.log(HeapSortPart2(array, 0, size));