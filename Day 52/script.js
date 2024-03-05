const me = {
    name: "gio",
    age: 20,
    studing: "programming",
    height: 1.60,
    updateAge: function () {
      me.age = 15;
    }
  };
  
  console.log(me);
  console.log(me.updateAge())
  
  const car = {
    brand: "toyota",
    model: "Supra",
    year: 1970,
    hood: {
      engine: "V6"
    }
  };
  
  console.log(car)
  
  
  let fname = document.getElementById("name")
  let lname = document.getElementById("lastname")
  let age = document.getElementById("age")
  
  btn.addEventListener("click", function() {
    let person = {
      firstname: name.value,
      lastname: lastname.value,
      age: age.value
    };
  
    console.log(person);
  });
  
  
  //test
  
  const meee = {
    name: 'gio',
    lastname: 'gagnidze',
    age: 15
  }
  
  const you = {
    name: 'Nika',
    lastname: 'Keshelava',
    age: 24
  }
  
  const administrator = {
    changeName: function(accountObj,newName){
        accountObj.name = newName;
    },
  
    changeLastname: function(accountObj,newLastname){
        accountObj.lastname = newLastname;
    },
  
    changeAge: function(accountObj,newAge){
        accountObj.age = newAge;
    }
  }
  
  administrator.changeName(me,'dati');
  administrator.changeLastname(you,'chxikvadze');
  
  console.log(me);
  console.log(you);