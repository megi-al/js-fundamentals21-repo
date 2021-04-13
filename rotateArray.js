function rotateArr(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let lastMember = arr.pop();
        arr.unshift(lastMember)

    }

    console.log(arr.join(' '));
}
// rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
rotateArr(['1', '2', '3', '4', '3'])