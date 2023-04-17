const char = 'naruto';

console.log(char);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

//tsc sandbox.ts for manual compiling
//tsc sandbox.ts -w for auto compiling