let suspectOne = document.getElementById("sus1");
let suspectTwo = document.getElementById("sus2");
let btn = document.getElementById("btn");

const me = {
  firstName: 'gio',
  lastName: 'gagnidze',
  age: 15
};

const teacher = {
  firstName: 'Luka',
  lastName: 'Tskhvaradze',
  age: '17'
};

btn.addEventListener("click", function(){
  suspectOne.textContent = `Name: ${teacher.firstName} ${teacher.lastName}, Age: ${teacher.age}`;
  suspectTwo.textContent = `Name: ${me.firstName} ${me.lastName}, Age: ${me.age}`;
});

console.log(me);
console.log(luka);