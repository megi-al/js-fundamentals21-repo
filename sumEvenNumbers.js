function sumEvenNumbers(arr){

    let sum = 0;
    
    for(i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }

    for(let element of arr){
        if (element % 2 === 0){
            sum += element;
        } 
        
    }
    console.log(sum);
}


sumEvenNumbers(['1','2','3','4','5','6'])