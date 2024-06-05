// Ambil elemen hamburger icon dan sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Tambahkan event listener pada hamburger icon
hamburger.addEventListener("click", function () {
  // Toggle kelas active pada hamburger icon
  hamburger.classList.toggle("active");
  // Toggle kelas active pada sidebar
  sidebar.classList.toggle("active");
});
