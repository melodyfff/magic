// 传入的 resolve 和 reject 本身都是函数。其作用分别为：
// resolve - 把 Promise 的状态从进行中变为成功状态。
// reject - 把 Promise 的状态从进行中变为拒绝状态。


new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{resolve(123)},1000)
    })
    .then(res=>console.log(res))
    .finally(()=>console.log("finally run."))
// 123
// finally run.  



new Promise((resolve, reject) => {
    console.log('初始化');

    resolve();
})
.then(() => {
    throw new Error('有哪里不对了');
    // eslint-disable-next-line no-unreachable
    console.log('执行「这个」”'); // 不会执行
})
.catch((err) => {
    console.log('执行「那个」'+err);
})
.finally(() => {
    console.log('执行「这个」，无论前面发生了什么');
});
// 初始化
// 执行「那个」Error: 有哪里不对了
// 执行「这个」，无论前面发生了什么