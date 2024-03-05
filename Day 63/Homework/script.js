// გააკეთეთ კონსტრუქტორი რომელიც შეგიქმნით სკოლის მოსწავლის id_ს რომელიც შედგება (სახელი გვარი ქულა)

function SchoolStudentId(name, lastname, score){
    this.name = name
    this.lastname = lastname
    this.score = score
}

let student = new SchoolStudentId ("Giorgi", "Gagnidze", "10")
console.log(student)

// გააკეთეთ 5 მაგალითი კონსტრუქტორის და ნამუშევარი ატვირთეთ github ზე



function FirstConstruction(name ,age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}
const me = new FirstConstruction("gio", 15, "purple")
console.log(me)

function SecondConstruction(fullname , age, city, country) {
    this.fullname = fullname;
    this.age = age;
    this.city = city;
    this.country = country;
}
const me1 = new SecondConstruction("gio gagnidze", 15, "rustavi", "Georgia")
console.log(me1)

const names = ["luka", "gela", "dati", "nika"]
const accounts = []
for(let i = 0; i < names.length; i++){
    accounts.push(new Person(names[i]))
}

console.log(accounts)

