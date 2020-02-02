//Insertion better 
function insertionbetter(array) {
    let size = array.length;
    for (i = 0; i < size; i++) {
        let temp = array[i];
        for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
        console.log(array, array[j + 1])
    }
    return array;
};
console.log(insertionbetter([1, 4, 0, -1]));

//Insertion

function insertion(array){
    var copy = [array[0]];
    for (i=1; i<array.length; i++){
        if(array[i] < copy[i-1]){
            var temp = array[i];
        for(j=copy.length-1; j>=0; j--){
            if((j==0) && (temp<copy[j])){
                copy.splice(j, 0, temp);
                break;
               }
            if((temp<copy[j]) && (temp>copy[j-1])){
                copy.splice(j, 0, temp);
                break;
            }
            }
    }
        else{
        copy.push(array[i]);
    }
    }
    console.log(copy);
}

//insertion([2,4,0,9,3]);