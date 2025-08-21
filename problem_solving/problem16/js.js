// problem (16): Remove String Spaces

function noSpace(str) {
    return str.split(' ').join(''); 
}

console.log(noSpace('Hello World')); // "HelloWorld"
console.log(noSpace(' Noran   Ayman ')); // "Removespaces"