function reverseAnArrayOfStrings(elements){
    let result = [];
    let textResult = '';

    let swapOperations = Math.ceil(elements.length / 2);

    for (let i = 0; i < swapOperations; i++){
        result[i] = elements[elements.length - 1 - i];
        result[elements.length - 1 - i] = elements[i];

    }
    for(let element of result){
        textResult += element + ' ';

    }
    console.log(textResult);
    //вместо последния for цикъл, може да използваме и :
        // console.log(result.join(' '));
               
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])