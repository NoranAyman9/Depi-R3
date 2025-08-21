// problem (14): To Square Root or Not

function SquareRoot(array) {
    return array.map(num => {
        const sqrt = Math.sqrt(num); 
        if (Number.isInteger(sqrt)) { 
        return sqrt;
        } else {
        return num * num; 
        }
    });
}
console.log(SquareRoot([4, 3, 9, 7, 2, 1])); // [2, 9, 3, 49, 4, 1]