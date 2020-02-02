//Selection

function Selection(array){
    for (i=0; i<=array.length; i++){
        for(j=i+1; j<=array.length; j++){
        if(array[i]>array[j]){
           valmin = array[j];
           index = j;
           let temp = array[i];
           array[i] = valmin;
           array[index] = temp;
               }
            }
    }
   return array;
}
console.log(Selection([1,3,35,2,43,0]));