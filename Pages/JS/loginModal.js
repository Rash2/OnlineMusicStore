var modal = document.getElementById("login-modal");
var loginButton = document.getElementById("login-button");
var modalCloseButton = document.getElementsByClassName("close")[0];
var modalBody = document.getElementsByClassName("modal-body")[0];

loginButton.addEventListener("click", () => {
  modal.style.display = "block";
});

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});

//create email input
let labelEmail = document.createElement("label");
let inputEmail = document.createElement("input");
labelEmail.for = "loginEmail1";
labelEmail.innerHTML = "Email address";
labelEmail.style.margin = "0 16px";
inputEmail.type = "email";
inputEmail.classList.add("form");
inputEmail.id = "inputEmail1";
inputEmail.placeholder = "Enter email...";
document.getElementsByClassName("form-group")[0].appendChild(labelEmail);
document.getElementsByClassName("form-group")[0].appendChild(inputEmail);

//create password input
let labelPassword = document.createElement("label");
let inputPassword = document.createElement("input");
labelPassword.for = "loginPassword1";
labelPassword.innerHTML = "Password";
labelPassword.style.margin = "0 16px";
inputPassword.type = "password";
inputPassword.classList.add("form");
inputPassword.id = "loginPassword1";
inputPassword.placeholder = "Enter password...";
inputPassword.style.transform = "translateX(16px)";
document.getElementsByClassName("form-group")[1].appendChild(labelPassword);
document.getElementsByClassName("form-group")[1].appendChild(inputPassword);

document.getElementById("register-text").addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("register-modal").style.display = "block";
});

document.getElementById("login-button2").addEventListener("click", () => {
  loginInfo = {
    email: inputEmail.value,
    password: inputPassword.value
  };

  valid = true;
  emailExists = false;
  //Check if email exists
  for (let user of users) {
    if (user.email == loginInfo.email) emailExists = true;
  }

  valid = valid && emailExists;
  if (!emailExists) alert("Email doesn't exist");

  passwordMatch = false;
  //Check if password is correct
  for (let user of users) {
    if (user.email == loginInfo.email && user.password == loginInfo.password) {
      passwordMatch = true;
    }
  }

  valid = valid && passwordMatch;
  if (!passwordMatch) alert("The password doesn't match");

  if (valid) {
    for (let user of users) {
      if (user.email == loginInfo.email) {
        localStorage.setItem("userName", user.name);
      }
    }
    modal.style.display = "none";
    document.getElementById("login-button").classList.add("hide");
    document.getElementById("register-button").classList.add("hide");
    greeting.style.color = "white";
    greeting.innerHTML = "Hello " + localStorage.getItem("userName");
    document.getElementsByTagName("header")[0].appendChild(greeting);

    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logout-button";
    logoutBtn.innerHTML = "Logout";
    document.getElementsByTagName("header")[0].appendChild(logoutBtn);
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userName");
      greeting.style.display = "none";
      document.getElementById("login-button").classList.remove("hide");
      document.getElementById("register-button").classList.remove("hide");
      logoutBtn.style.display = "none";
    });

    //clear login form fields
    inputEmail.value = "";
    inputPassword.value = "";
  }
});
