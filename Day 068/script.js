//1
let count = 0;

function counter() {
    count++;
    document.getElementById('counter').innerText = 'Counter: ' + count;
    changeColors();
}

function changeColors() {
    let div = document.getElementById('div');
    let colors = ['#f09', '#999', '#fff', '#f00', '#9ff'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.backgroundColor = randomColor;
    document.getElementById('counter').style.color = randomColor;
}
document.getElementById('btn').addEventListener('click', counter);


//2
document.getElementById('btn').addEventListener('click', changeImage);

function changeImage() {
  document.getElementById('img').src = 'img1.jpg';
}

//3
document.getElementById('btn').addEventListener('click', generateRandomNumbers);
function generateRandomNumbers() {
  let paragraphs = document.getElementsByClassName('num');
  for (let i = 0; i < paragraphs.length; i++) {
    let randomNumber = Math.floor(Math.random() * 10000000) + 1;
    paragraphs[i].innerText = 'Random Num: ' + randomNumber;
  }
}

//4
document.getElementById('btn').addEventListener('click', changeLinkAndColor);

function changeLinkAndColor() {
  let link = document.getElementById('link');
  let container = document.getElementById('div1');
  link.href = 'https://github.com/giogagnidze?tab=repositories';
  container.style.backgroundColor = '#f0f0';
}

//5
function changeBorderColors(className, color) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = color;
    }
  }
  
changeBorderColors('exampleClass', 'red');