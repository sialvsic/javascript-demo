setTimeout(() => {
  // 插入十万条数据
  const total = 100000;
  // 一次插入 20 条，如果觉得性能不好就减少
  const once = 20;
  // 渲染数据总共需要几次
  const loopCount = total / once;
  let countOfRender = 0;
  let ul = document.querySelector('ul');

  function add() {
    // 优化性能，插入不会造成回流
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement('li');
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li)
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop()
  }

  function loop() {
    if(countOfRender < loopCount) {
      window.requestAnimationFrame(add)
    }
  }

  loop()
}, 0);
