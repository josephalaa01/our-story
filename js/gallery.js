const upload = document.getElementById("upload");
const gallery = document.getElementById("gallery");

upload.addEventListener("change", () => {
  [...upload.files].forEach(file => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    gallery.appendChild(img);
  });
});
