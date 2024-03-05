// stack dalagebulia da limiti aq
// heap areulia da ar aq limiti

//primitiuli mnisvneloba

const x = 10;
let y = x
y = 5
console.log(y)
console.log(x)


//araprimitiuli
const x = {
    name: "gio"
    age: 17
}

const y = x;

y.name = "giorgi"
console.log(y)    // x ic da y c sheicvala


//stack shi inaxeba promitiulebi
//heap shi inaxeba object ebi
//obieqts pirdapir ver sheinaxav radgan primitiuli mnisvneloba ar aris


const func = function(){
    console.log("Hello")
}

const reFunc = func

func()

reFunc()

/////////////////

const printObjects = function(obj){
    obj.status = "Printing"
    console.log(obj)
}

const me = {
    name: "gio",
    age: 15
}

printObjects(me)

console.log({...me})



//შექმენით ობიექტი სადაც გექნებათ ჩაშენებული ობიექტი მეთოდი და კუთვნილებები
//შექმნეთით ცვლადი სადაც შეინახავთ პრიმიტიულ მნიშვნელობას
//შექმნეთით ცვლადი სადაც შეინახავთ მიმთითებელი ტიპის მნიშვნელობას



const obj = {
    obj1: {
        name: ["gio", "dati", "data"]
    },
    greet: function() {
        console.log("hello");
    }
}

const num = 10;
let y = num
y = 5
console.log(y)
console.log(num)


const person = {
    name: "gela",
    age: 15,
    address: {
        city: "Rustavi",
        country: "Georgia"
    }
};



/////////////////////////////////////////////////

const me1 = {
    name: "gio",
    greet: function(){
        console.log("hello " + this.name)
    }
}

// this keyword miutitebs obieqts
//new qmnis cariel objects


function Person(name ,age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

const mee = new Person("gio", 17, "white")
const you = new Person("gela", 14, "purple")

console.log(me)
console.log(you)

const names = ["luka", "gela", "dati", "nika"]
const accounts = []
for(let i = 0; i < names.length; i++){
    accounts.push(new Person(names[i]))
}

console.log(accounts)



//შქმენით კონსტრუქტორი რომელსაც გადასცემთ მნიშვნელობებს ფრენის კოდს და ფრენის სტატუსს და ამ კონსტრუქტორით შექმენით თითო ობიექტი ყოველ ექაუნთზე

function Flight(code, status) {
    this.code = code;
    this.status = status;
}

let myFlight = new Flight("123123", "On time")