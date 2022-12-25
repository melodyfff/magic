const userColumn=[
	{
		title: '用户名称',
		dataIndex: 'configname',
		key: 'username',
	},
	{
        title: '手机号码',
		dataIndex: 'configvalue',
		key: 'phone',
	},
	{
		title: '电子邮箱',
		dataIndex: 'remark',
		key: 'email',
	},
	{
		title: '用户角色',
		dataIndex: 'remark',
		key: 'userrole',
	},
	{
		title: '备注',
		dataIndex: 'remark',
		key: 'remark',
	}
]

const number = [1,5,3,4,2]


const ws = (name='ok',...parms)=>({id:{},name:name||""}) 
console.log(ws()) // {id: {…}, name: 'ok'}


// 对参数使用扩展语法
// var args = Array.from(arguments);
// var args = [...arguments];
var args = [...userColumn]
console.log(args)


let myArray = ['1', '2', '3'];

// concat() 方法连接两个或多个数组并返回一个新的数组。
// eslint-disable-next-line no-unused-vars
myArray = myArray.concat('a', 'b', 'c'); // myArray is now ["1", "2", "3", "a", "b", "c"]

// join() 方法将数组中的所有元素连接成一个字符串。
// eslint-disable-next-line no-unused-vars
var list = myArray.join(' - '); // list is "1 - 2 - 3 - a - b - c"

// push() 方法在数组末尾添加一个或多个元素，并返回数组操作后的 length。
myArray.push('4'); // myArray is now ["1", "2", "3","4"]

// pop() 方法从数组移出最后一个元素，并返回该元素。
// eslint-disable-next-line no-unused-vars
const last = myArray.pop();

// shift() 方法从数组移出第一个元素，并返回该元素。
// eslint-disable-next-line no-unused-vars
const first = myArray.shift()

// unshift() 方法在数组开头添加一个或多个元素，并返回数组的新长度。
myArray.unshift('4')

// slice() 方法从数组提取一个片段，并作为一个新数组返回。
myArray = myArray.slice(1,4); // 包含索引 1，不包括索引 4

// at() 方法返回数组中指定索引处的元素，如果索引超出范围，则返回 undefined。它主要用于从数组末尾访问元素的负下标。
myArray.at(-2); // "d", the second-last element of myArray

export {userColumn,number,ws};

 
