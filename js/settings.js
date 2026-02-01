const textarea = document.getElementById("letterText");

textarea.value = localStorage.getItem("loveLetter") || "";

function saveText() {
  localStorage.setItem("loveLetter", textarea.value);
  alert("اتحفظت ❤️");
}
