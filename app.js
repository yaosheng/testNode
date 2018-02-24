let tmpSet = new Set();

tmpSet.add(1);
tmpSet.add(2);
tmpSet.add(2);

let tmpSet1 = tmpSet.values();

console.log("tmpSet :", tmpSet);
console.log("tmpSet1 :", tmpSet1);

let array1 = new Array();
console.log(typeof array1);

tmpSet.forEach((value) => {
    array1.push(value);
});
console.log(typeof array1);
array1.map((value) => {
    return value * 10;
});

console.log("array1 :", array1);
console.log(tmpSet.size);
console.log(tmpSet1.size);

// tmpSet.delete("1");
// console.log("boolean : ", tmpSet.has("1"));
console.log("keys :", tmpSet.keys());
console.log("test :", tmpSet.entries());