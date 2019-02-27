let number1 = 0;
let number2 = 0;

function onClickNumber1() {
  const node = document.getElementsByClassName('click-number-1')[0];
  console.log(node);
  node.innerText = number1++;
}

function onClickNumber2() {
  const node = document.getElementsByClassName('click-number-2')[0];
  console.log(node);
  node.innerText = number2++;
}

function fun() {
  for(let i = 0; i < 69999; i++) {
    console.log(i + Math.random());
  }
}

fun();
