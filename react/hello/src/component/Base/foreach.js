// for 循环实例

// 普通循环
for (var step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

// 遍历数组
const colors = ['red', 'green', 'blue'];
colors.forEach((color)=> console.log(color)) // red green blue
colors.forEach((color,index)=> console.log(color+'-'+index)) // red-0 green-1 blue-2

// Map遍历
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');

sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for(var [k,v] of sayings){
    console.log(k + ' goes ' + v);
}

// Set遍历
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");

for (let item of mySet) console.log(item);
// 1
// "some text"

// Arrays 和 Set互相转换\
// set => arr
Array.from(mySet);
// eslint-disable-next-line no-unused-vars
var newArr = [...mySet];


// arr => set
// eslint-disable-next-line no-unused-vars
var mySet2 = new Set([1,2,3,4]);
