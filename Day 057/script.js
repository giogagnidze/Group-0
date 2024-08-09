const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup");
const name2 = document.getElementById("myname")
const email2 = document.getElementById("myemail")
const password2 = document.getElementById("mypassword")

signupBtn.addEventListener("click", function(){
  function user(Name, Email, Password){
    this.name = Name
    this.email = Email
    this.password = Password
  }

  const userInitials = new user(name.value, email.value, password.value)
  console.log(userInitials);

  name2.innerHTML = userInitials.name
  email2.innerHTML = userInitials.email
  password2.innerHTML = userInitials.password
})