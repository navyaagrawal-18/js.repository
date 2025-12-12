const arr = [1, 2, 3, 4, 5]; // array 
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
    console.log(`char is ${greet}`);
}

// map (for-of loop used)
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
// Duplicate key 'IN' will overwrite (correct behavior)
map.set('IN', "India");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// object (for-in loop used)
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr1 = ["js", "rb", "py", "java"];
for (const key in arr1) {
    console.log(arr1[key]);
}

const coding = ["cpp", "py", "js", "java"];
coding.forEach((item) => {
    console.log(item);
});

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languageName: "javascript",
        languageField: "js"
    },
    {
        languageName: "java",
        languageField: "java"
    },
    {
        languageName: "python",
        languageField: "py"
    }
];

mycoding.forEach((item) => {
    console.log(item.languageName);
});
