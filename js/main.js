function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "30122022") {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "الباسورد غلط يا جميل ❤️";
  }
}
