if (localStorage.getItem("isLogin") !== "true") {
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem("user"));
document.getElementById("welcome").innerText =
  "Selamat datang, " + user.username;

function logout() {
  localStorage.removeItem("isLogin");
  window.location.href = "login.html";
}
