function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "30122022") {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "الباسورد غلط يا جميل ❤️";
  }
}
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);

