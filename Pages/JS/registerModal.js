var modal1 = document.getElementById("register-modal");
var registerButton = document.getElementById("register-button");
var modalCloseButton = document.getElementsByClassName("close1")[0];
var modalBody = document.getElementsByClassName("modal-body")[0];

registerButton.addEventListener("click", () => {
  modal1.style.display = "block";
});

modalCloseButton.addEventListener("click", () => {
  modal1.style.display = "none";
});

//Create name input
let nameLabel = document.createElement("label");
let nameInput = document.createElement("input");
nameLabel.for = "registerName1";
nameLabel.innerHTML = "Your name";
nameLabel.style.margin = "0 16px";
nameInput.type = "text";
nameInput.classList.add("form");
nameInput.id = "registerName1";
nameInput.placeholder = "Enter your name...";

document.getElementsByClassName("form-group1")[0].appendChild(nameLabel);
document.getElementsByClassName("form-group1")[0].appendChild(nameInput);

//Create email input
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
emailLabel.for = "registerEmail1";
emailLabel.innerHTML = "Your email";
emailLabel.style.margin = "0 16px";
emailInput.type = "email";
emailInput.classList.add("form");
emailInput.id = "registerEmail1";
emailInput.placeholder = "Enter your email address...";

document.getElementsByClassName("form-group1")[1].appendChild(emailLabel);
document.getElementsByClassName("form-group1")[1].appendChild(emailInput);

//Create age range input
let ageLabel = document.createElement("label");
let ageRangeInput = document.createElement("input");
let displayAgeValue = document.createElement("h3");
displayAgeValue.innerHTML = 18;
ageLabel.for = "registerAge1";
ageLabel.innerHTML = "Your age";
ageLabel.style.margin = "0 16px";
ageRangeInput.type = "range";
ageRangeInput.min = "13";
ageRangeInput.max = "90";
ageRangeInput.value = "18";
document.getElementsByClassName("form-group1")[2].style.transform =
  "translateX(-101px)";
document.getElementsByClassName("form-group1")[2].appendChild(ageLabel);
document.getElementsByClassName("form-group1")[2].appendChild(ageRangeInput);
document.getElementsByClassName("form-group1")[2].appendChild(displayAgeValue);

ageRangeInput.addEventListener("change", () => {
  displayAgeValue.innerHTML = ageRangeInput.value;
});

// Create gender radio button
let genderLabel = document.createElement("label");
let genderInput1 = document.createElement("input");
let genderLabel1 = document.createElement("label");

let genderInput2 = document.createElement("input");
let genderLabel2 = document.createElement("label");

let genderInput3 = document.createElement("input");
let genderLabel3 = document.createElement("label");

genderLabel.for = "registerGender1";
genderLabel.innerHTML = "Your gender<br>";

genderInput1.type = "radio";
genderInput1.name = "gender";
genderInput1.value = "Male";
genderInput1.id = "registerGender1";
genderInput1.checked = "true";

genderLabel1.innerHTML = "Male <br>";

genderInput2.type = "radio";
genderInput2.name = "gender";
genderInput2.value = "Female";
genderInput2.id = "registerGender1";

genderLabel2.innerHTML = "Female <br>";

genderInput3.type = "radio";
genderInput3.name = "gender";
genderInput3.value = "Other";
genderInput3.id = "registerGender1";

genderLabel3.innerHTML = "Other";

document.getElementsByClassName("form-group1")[3].appendChild(genderLabel);
document.getElementsByClassName("form-group1")[3].appendChild(genderInput1);
document.getElementsByClassName("form-group1")[3].appendChild(genderLabel1);
document.getElementsByClassName("form-group1")[3].appendChild(genderInput2);
document.getElementsByClassName("form-group1")[3].appendChild(genderLabel2);
document.getElementsByClassName("form-group1")[3].appendChild(genderInput3);
document.getElementsByClassName("form-group1")[3].appendChild(genderLabel3);

//Create fav instrument select
let instrumentSelect = document.createElement("select");
let instrumentLabel = document.createElement("label");

instrumentLabel.for = "registerSelect1";
instrumentLabel.innerHTML = "Your favourite instrument";
instrumentLabel.style.margin = "0 16px";

instrumentSelect.id = "registerSelect1";
instrumentSelect.classList.add("form");

document.getElementsByClassName("form-group1")[4].appendChild(instrumentLabel);
document.getElementsByClassName("form-group1")[4].appendChild(instrumentSelect);

let selectOpt1 = document.createElement("option");
let selectOpt2 = document.createElement("option");
let selectOpt3 = document.createElement("option");

selectOpt1.value = "Guitar";
selectOpt1.innerHTML = "Guitar";
selectOpt2.value = "Bass";
selectOpt2.innerHTML = "Bass";
selectOpt3.value = "Drums";
selectOpt3.innerHTML = "Drums";

instrumentSelect.appendChild(selectOpt1);
instrumentSelect.appendChild(selectOpt2);
instrumentSelect.appendChild(selectOpt3);

//Create password input
let passwordLabel = document.createElement("label");
let passwordInput = document.createElement("input");
passwordLabel.for = "registerPassword1";
passwordLabel.innerHTML = "Password";
passwordLabel.style.margin = "0 16px";
passwordInput.type = "password";
passwordInput.classList.add("form");
passwordInput.id = "registerPassword1";
passwordInput.placeholder = "Enter your password...";

document.getElementsByClassName("form-group1")[5].appendChild(passwordLabel);
document.getElementsByClassName("form-group1")[5].appendChild(passwordInput);

//Create confirm password input
let confirmPasswordLabel = document.createElement("label");
let confirmPasswordInput = document.createElement("input");
confirmPasswordLabel.for = "registerPassword2";
confirmPasswordLabel.innerHTML = "Confirm password";
confirmPasswordLabel.style.margin = "0 16px";
confirmPasswordInput.type = "password";
confirmPasswordInput.classList.add("form");
confirmPasswordInput.id = "registerPassword2";
confirmPasswordInput.placeholder = "Re-enter your password...";

document
  .getElementsByClassName("form-group1")[6]
  .appendChild(confirmPasswordLabel);
document
  .getElementsByClassName("form-group1")[6]
  .appendChild(confirmPasswordInput);

//Create terms and conditions checkbox
let termCheck = document.createElement("input");
let termLabel = document.createElement("label");

termLabel.innerHTML = "I agree to the terms and conditions";
termLabel.style.fontSize = "0.8em";
termLabel.style.margin = "0 16px";
termLabel.for = "registerCheck1";

termCheck.type = "checkbox";
termCheck.id = "registerCheck1";

document.getElementsByClassName("form-group1")[7].appendChild(termCheck);
document.getElementsByClassName("form-group1")[7].appendChild(termLabel);

var registerAccountBtn = document.getElementById("register-button2");

const users = [];

$.get("https://codrut-store.firebaseio.com/users.json?print=pretty")
  .done(res => {
    for (let key in res) {
      users.push({
        ...res[key],
        id: key
      });
    }
  })
  .fail(err => {
    console.log("Error: ", err);
  });

registerAccountBtn.addEventListener("click", () => {
  //get gender value
  let gender = null;
  if (genderInput1.checked) {
    gender = "male";
  } else if (genderInput2.checked) {
    gender = "female";
  } else if (genderInput3.checked) {
    gender = "other";
  }

  let formInfo = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageRangeInput.value,
    gender,
    favInstrument: instrumentSelect.value,
    password: passwordInput.value,
    confirmPass: confirmPasswordInput.value,
    agreedTerms: termCheck.checked
  };

  let nameReg = /[a-zA-z]+/;
  let emailReg = /^[a-zA-Z0-9!?#$%^&*(){}._~-]+(\.[a-zA-Z0-9!?#$%^&*(){}._~-])*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$/;
  let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!,.-])[a-zA-Z0-9?!,.-]{8,}$/;

  let valid = true;

  //Check if name not empty
  valid = valid && nameReg.test(formInfo.name);
  if (!nameReg.test(formInfo.name)) alert("Name must not be empty");

  //Check if email valid
  valid = valid && emailReg.test(formInfo.email);
  if (!emailReg.test(formInfo.email)) alert("Invalid email");

  //Check if password valid
  valid = valid && passwordReg.test(formInfo.password);
  if (!passwordReg.test(formInfo.password))
    alert(
      "Password must contain lower case, upper case, digit, special character and be at least 8 characters long"
    );

  //Check if passwords match
  valid = valid && formInfo.password === formInfo.confirmPass;
  if (formInfo.password != formInfo.confirmPass) alert("Passwords must match");

  //Check if terms checkbox checked
  valid = valid && formInfo.agreedTerms;
  if (!formInfo.agreedTerms)
    alert("You must agree to the terms and conditions");

  //Check if email already in use
  let used = false;
  for (let user of users) {
    if (user.email == formInfo.email) {
      used = true;
      valid = false;
    }
  }

  if (used) alert("Email already in use");

  if (valid) {
    $.post(
      "https://codrut-store.firebaseio.com/users.json",
      JSON.stringify(formInfo)
    )
      .done(res => {
        console.log("Success");
      })
      .fail(err => {
        console.log("Error: ", err);
      });

    //Update de users array with the new account
    users.push(formInfo);

    localStorage.setItem("userName", formInfo.name);
    modal1.style.display = "none";
    registerButton.classList.add("hide");
    document.getElementById("login-button").classList.add("hide");
    let greeting = document.createElement("h3");
    greeting.style.color = "white";
    greeting.innerHTML = "Hello " + formInfo.name;
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
  }
});
