let numbers = [10, 20, 30, 40, 50, 60];

let slicedArray = numbers.slice(1, 4);

numbers.splice(2, 2);

console.log("Sliced Array:", slicedArray);
console.log("Original Array after splice:", numbers);
