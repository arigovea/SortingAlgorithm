//BubbleSort

const array = [];
function BubbleSort(array){
for (i=0; i<=array.length; i++){
    for(j=0; j<=array.length; j++){
    if(array[j]>array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
           }
        }
    }
 return array;
}
console.log(BubbleSort([1,2,7,6,0,-1]));