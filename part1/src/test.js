//variables
const x = 1;
let y = 5;

console.log(x, y); // 1, 5 are printed
y += 10;
console.log(x, y); // 1, 15 are printed
y = "sometext";
console.log(x, y); // 1, sometext are printed
x = 4; // causes an error

//arrays
const tu = [1, -1, 3];

t.push(5);

console.log(t.length); // 4 is printed
console.log(t[1]); // -1 is printed

t.forEach(value => {
    console.log(value); // numbers 1, -1, 3, 5 are printed, each to own line
});

value => {
    console.log(value);
};

const ti = [1, -1, 3];

const t2 = t.concat(5);

console.log(t); // [1, -1, 3] is printed
console.log(t2); // [1, -1, 3, 5] is printed

const t = [1, 2, 3];

const m1 = t.map(value => value * 2);
console.log(m1); // [2, 4, 6] is printed
