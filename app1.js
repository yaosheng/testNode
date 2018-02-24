let tmpMap = new Map();

tmpMap.set("1", 1);
tmpMap.set("2", 3);
tmpMap.set("3", 5);

console.log("tmpMap :", tmpMap);

console.log(tmpMap.has("2"));

console.log("tmpMap get :", tmpMap.get("3"));

console.log("tmpMap delete:", tmpMap.delete("3"));

console.log("tmpMap size:", tmpMap.size);

tmpMap.forEach((value) => {
    console.log("value :",value);
});

let o1 = {"2" : 2, "4" : 4, "6" : 6};

for(let item in o1){
    if(o1.hasOwnProperty(item)){
        console.log(item);
    }
}

let a1 = [1, 3, 5, 7, 9];

a1.forEach( value => {
    console.log(value);
});

console.log(a1);