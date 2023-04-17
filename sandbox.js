var char = 'naruto';
console.log(char);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
//tsc sandbox.ts for manual compiling
//tsc sandbox.ts -w for auto compiling
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5)); //it will works
// console.log(circ('halo')) //it won't works (error)
