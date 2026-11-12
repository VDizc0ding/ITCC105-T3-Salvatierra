const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

document.querySelectorAll('input[type="file"][data-preview]').forEach(input => {
  input.addEventListener("change", event => {
    const file = event.target.files && event.target.files[0];
    const target = document.getElementById(input.dataset.preview);
    if (!file || !target) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      target.src = reader.result;
      target.classList.add("visible");
    };
    reader.readAsDataURL(file);
  });
});

document.querySelectorAll("[data-file]").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Add your file to the static/uploads folder, then update this link in templates/index.html. See README.md.");
    }
  });
});
