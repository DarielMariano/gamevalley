const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    localStorage.setItem("darkmode", "true");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("darkmode", "false");
}

const cambiarTema = () => {
    const body = document.querySelector("body");
    const temaActual = body.getAttribute("data-bs-theme");
    temaActual === "light" ? temaOscuro() : temaClaro();
}


window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkmode") === "true") {
        temaOscuro();
    } else {
        temaClaro();
    }
});