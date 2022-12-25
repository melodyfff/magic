const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// 异步，观察pending状态
console.log(fetchPromise); // Promise {<pending>}

fetchPromise.then( response => {
  console.log(response)
  console.log(`已收到响应：${response.status}`);
  alert(`已收到响应：${response.status}`)
});

console.log("已发送请求……");


fetchPromise.then(response =>{
    console.log(response)
    const jsonPromise =  response.json();
    console.log('>>>'+jsonPromise) // >>>[object Promise]
    jsonPromise.then( json => {
        console.log(json);
        console.log(json[0].name);
    });
})


fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`无法获取产品列表：${error}`);
  });


  const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
  const fetchPromise3 = fetch('//mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( responses => {
      for (const response of responses) {
        console.log(`${response.url}：${response.status}`);
      }
    })
    .catch( error => {
      console.error(`获取失败：${error}`)
    });  