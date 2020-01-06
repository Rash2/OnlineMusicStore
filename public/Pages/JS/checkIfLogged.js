var greeting = document.createElement("h3");
var logoutBtn = document.createElement("button");

if (localStorage.getItem("userName") != null) {
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
}
