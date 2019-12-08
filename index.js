// task #1;
console.log(`Task #1 
`);

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// task #2;
console.log(`
Task #2 
`);

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [,name2,,name4], ages: [,age2,,age4]} = data;
 console.log(name2);
 console.log(age2);
 console.log(name4);
 console.log(age4);

//  task #3;
console.log(`
Task #3 
`);

function mul(...x) {
    let result = 1;
    for (let i=0; i<x.length; i++) {
        if(!isNaN(x[i])) {
            result*=x[i];
        }

        if(x.every(el => typeof(el)===Number)) {
            result = 0;
        }
    }
    console.log(result);
 };

 mul(1, "str", 2, 3, true); 
 mul(null, "str", false, true); 
 
//  task #4;
console.log(`
Task#4 
`);

let server = {
    data: 0,
    convertToString: () => server.data + ""
};
let client = {
    server: server,
    result: "",
    calc: (data) => {
        server.data = data;
        client.result = server.convertToString(); 
    }
}; 

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// task #5;
console.log(`
Task #5
`);

function mapBuilder (keysArray, valuesArrays) {
    let newMap = new Map();
    for (let i = 0; i<keysArray.length; i++) {
        newMap.set(keysArray[i], valuesArrays[i]);
    }
    return newMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

 


