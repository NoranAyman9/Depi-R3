//  problem (22) Calculate Average

function avg(array) {
    var sum = 0
    for (let i =0; i< array.length; i++){
        sum+=array[i]
    }
    var result = sum / array.length
    return result
    }
console.log(avg([5,5,5]));
    
	


