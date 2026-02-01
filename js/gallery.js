const dropZone = document.getElementById("dropZone");
const gallery = document.getElementById("gallery");

dropZone.ondragover = e => e.preventDefault();

dropZone.ondrop = e => {
  e.preventDefault();
  [...e.dataTransfer.files].forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
};
