// ========== REGISTER ==========
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!username || !password || !confirm) {
      alert("Semua field wajib diisi");
      return;
    }

    if (password !== confirm) {
      alert("Password tidak cocok");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      username,
      password
    }));

    alert("Register berhasil");
    window.location.href = "login.html";
  });
}

// ========== LOGIN ==========
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Akun belum terdaftar");
      return;
    }

    if (username === user.username && password === user.password) {
      localStorage.setItem("isLogin", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Username atau password salah");
    }
  });
}
