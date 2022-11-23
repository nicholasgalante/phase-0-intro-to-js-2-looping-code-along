// Code your solutions in this file
countDown = (int) => {
    while (int > -1) {
        console.log(int);
        int--
    }
}

writeCards = (names, event) => {
   const newArray = [];
    for (let index = 0; index < names.length; index++) {
        newArray[index] = `Thank you, ${names[index]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}