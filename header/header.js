document.addEventListener("DOMContentLoaded", () => {
  fetch("header/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // apertura del menu a tendina per dispositivi mobili
      const hamburger = document.querySelector(".hamburger");
      const menuUl = document.querySelector(".menu ul");

      if (hamburger) {
        hamburger.addEventListener("click", () => {
          menuUl.classList.toggle("open");
        });
      }

      // pagina attiva
      let currentPage = window.location.pathname.split("/").pop();
      if (currentPage === "") {
        currentPage = "index.html"; // default page
      }
      const menuLinks = document.querySelectorAll(".menu ul li a");
      menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
      
    })
    .catch(error => console.error("Errore nel caricamento del header:", error));
});