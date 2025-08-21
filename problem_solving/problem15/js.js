// problem (15): Count by X

function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i * x); 
    }
    return result;
}

console.log(countBy(2, 5));  // [2,4,6,8,10]
