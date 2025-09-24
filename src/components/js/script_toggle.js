// 1. Seleccionar el botón y el menú
const boton = document.querySelector(".menu-toggle");
const menu = document.getElementById("nav-menu");

// 2. Escuchar el clic en el botón
boton.addEventListener("click", () => {
  // 3. Alternar la clase 'active' en el menú
  menu.classList.toggle("active");

  // Cerrar menú al hacer clic en un enlace (solo en móvil)
  const enlaces = document.querySelectorAll(".nav-menu a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
