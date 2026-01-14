const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    const group = input.parentElement;
    group.classList.remove("input-error", "input-success");
    const oldError = group.querySelector(".error-text");
    if (oldError) oldError.remove();

    if (!input.value.trim()) {
      error(group, "Field wajib diisi");
      valid = false;
      return;
    }

    if (input.dataset.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        error(group, "Email tidak valid");
        valid = false;
        return;
      }
    }

    if (input.dataset.type === "password" && input.value.length < 6) {
      error(group, "Password minimal 6 karakter");
      valid = false;
      return;
    }

    if (input.dataset.type === "confirm") {
      const password = document.getElementById("password").value;
      if (input.value !== password) {
        error(group, "Password tidak sama");
        valid = false;
        return;
      }
    }

    group.classList.add("input-success");
  });

  if (valid) {
    localStorage.setItem("isRegistered", "true");
    window.location.href = "dashboard.html";
  }
});

function error(group, msg) {
  group.classList.add("input-error");
  const e = document.createElement("div");
  e.className = "error-text";
  e.innerText = msg;
  group.appendChild(e);
}
