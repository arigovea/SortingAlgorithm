//Heap
const array = [10,34,25,32,1,2,7,4,3,90,-1,-5];
let size = array.length;
function HeapSort(array, i) {
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
    return HeapSort(array, ++i);
}
function swap(array, n, size) {
    if (n >= size - 1) {
        return array;
    }
    else {
        let root = n;
        let left = n * 2 + 1;
        let right = n * 2 + 2;
        if (array[left] > array[right] && left < size - 1) {
            let temp = array[root];
            array[root] = array[left];
            array[left] = temp;
            return swap(array, (n * 2 + 1), size)
        }
        if (array[left] < array[right] && right < size - 1) {
            let temp = array[root];
            array[root] = array[right];
            array[right] = temp;
            return swap(array, (n * 2 + 2), size);
        }
    }
}
HeapSort(array, 0);
function HeapSortPart2(array, m, size) {
    if (size <= 1) {
        return array;
    }
    if (array[m] > array[size - 1]) {
        let max = array[m];
        array[m] = array[size - 1];
        array[size - 1] = max;
    }
        swap(array, 0, size);

        return HeapSortPart2(array, m, --size)
}
console.log(HeapSortPart2(array, 0, size));